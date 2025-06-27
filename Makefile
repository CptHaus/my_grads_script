INSTALL = ${HOME}/GrADS

# File names without their paths
FILES = get_gdate/get_gdate.gsf mm2mon/mm2mon.gsf new_color/new_color.gs \
	make_dummy_grid/make_dummy_grid.gs

INSTALLED_FILES = ${addprefix ${INSTALL}/, ${notdir ${FILES}}}

.PHONY : install uninstall

install :
	cp -v ${FILES} ${INSTALL}/

uninstall :
	rm -fv ${INSTALLED_FILES}

