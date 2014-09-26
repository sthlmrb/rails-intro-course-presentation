images=$(addsuffix .png,$(subst diagrams,images,$(basename $(wildcard diagrams/*.txt))))

all: $(images)

images/%.png: diagrams/%.txt
	ditaa $^ $@
