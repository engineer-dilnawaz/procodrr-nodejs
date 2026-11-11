const API_URL = 'https://api.restcountries.com/countries/v5'
const PAGE_SIZE = 100 // free plan max per request

async function request(path) {
  const res = await fetch(API_URL + path, {
    headers: { Authorization: `Bearer ${process.env.REST_COUNTRIES_API_KEY}` },
  })
  const body = await res.json()
  if (!res.ok) {
    throw new Error(body.errors?.[0]?.message || res.statusText)
  }
  return body.data
}

// Convert a v5 country into the v3.1 shape the components were written for
function toV3(country) {
  return {
    name: { common: country.names.common, nativeName: country.names.native },
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capitals.map((capital) => capital.name),
    flags: { svg: country.flag.url_svg },
    tld: country.tlds,
    languages: country.languages.map((language) => language.name),
    currencies: country.currencies,
    borders: country.borders,
  }
}

export async function getAllCountries() {
  const firstPage = await request(`?limit=${PAGE_SIZE}`)
  const offsets = []
  for (let offset = PAGE_SIZE; offset < firstPage.meta.total; offset += PAGE_SIZE) {
    offsets.push(offset)
  }
  const otherPages = await Promise.all(
    offsets.map((offset) => request(`?limit=${PAGE_SIZE}&offset=${offset}`))
  )
  return [firstPage, ...otherPages].flatMap((page) => page.objects).map(toV3)
}

export async function getCountryByName(name) {
  const { objects } = await request(`/names.common/${encodeURIComponent(name)}`)
  if (!objects.length) throw new Error(`Country not found: ${name}`)
  return toV3(objects[0])
}

export async function getCountryByCode(code) {
  const { objects } = await request(`/codes.alpha_3/${code}`)
  return toV3(objects[0])
}
