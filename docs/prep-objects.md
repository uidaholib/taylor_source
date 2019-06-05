# Prep Collection Objects

Gather the high res access copies of the objects (pdf or jpg) into a folder. 
Ensure each filename corresponds with the object-id of the item metadata record. 
For example, metadata record with object-id `test-01` might be an object `test-01.jpg`, and `test-02` might be `test-02.pdf`.
From these base objects, we will produce two standard image derivatives for use in the site using ImageMagick:

- thumbs: 300px height, with name object-id + `_th.jpg`, in `thumbs/` dir
- smalls: 800px height, with name object-id + `_sm.jpg`, in `small/` dir

## Create Image derivatives

ImageMagick ([setup instructions](https://evanwill.github.io/_drafts/notes/imagemagick.html)).

For PDFs, first create the small images:

`for f in *.pdf; do magick -density 500 "$f"[0] -resize 800x800 -flatten "small/${f%.pdf}_sm.jpg"; done`

Then `cd small`, and create thumbs from the smalls: 

`for f in *.jpg; do magick "$f" -resize x300 -flatten "../thumbs/${f%_sm.jpg}_th.jpg"; done`

For JPGs, first create the small images:

`for f in *.jpg; do magick "$f" -resize 800x800 -flatten "small/${f%.pdf}_sm.jpg"; done`

Then create thumbs also from originals:

`for f in *.jpg; do magick "$f" -resize x300 -flatten ".thumbs/${f%.jpg}_th.jpg"; done`

## Move to server

In the server "objects" directory, create a new folder matching the collection url stub name. 
Add the objects to the folder (full sized, small folder, and thumbs folder). 
Add the url to the objects dir in the `_config.yml`.
