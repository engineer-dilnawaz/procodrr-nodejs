echo "Creating 1000 files in looped directory as app1.js app2.js..."


#  creating 1000 files 
# for i in {1..1000}; do
#   touch app$i.js
# done

# removing those above created files 
# using a new way of looping it works just like above
rm app{1..1000}.js
