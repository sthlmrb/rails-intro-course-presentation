Rails Intro Course Presentation
-------------------------------

This is the presentation for the introductory talk held at the Ruby on Rails
intro course every quarter.

The project is based on [Jekyll 2.x](http://jekyllrb.com/) and is deployed on
GitHub pages as a static HTML site.

Setup
-----

To run the project locally you will need to install the `jekyll` gem:

    gem install jekyll

To start the server, run this command in project root:

    jekyll serve

During development it can be helpful to supply the `--watch` option to `jekyll
serve` to have it restart the server when files are changed.

To generate images from the diagrams you will need to install
[ditaa](http://ditaa.sourceforge.net/) and [GNU
Make](http://www.gnu.org/software/make/). To regenerate the diagram images run:

    make

Contributing
------------

Contributions are very welcome. Please fork this repository and submit a pull
request.
