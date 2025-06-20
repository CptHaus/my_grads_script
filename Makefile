INSTALL = ${HOME}/Git/grads_tmp

# Directory of files
GDATE_PATH  = get_gdate
MM2MON_PATH = mm2mon
COLOR_PATH  = new_color

# File names without their paths
GDATE_FILE  = get_gdate.gsf
MM2MON_FILE = mm2mon.gsf
COLOR_FILE  = color_sample.jpg new_color.gs

# File names with their paths
GDATE  = ${GDATE_FILE:%=${GDATE_PATH}/%}
MM2MON = ${MM2MON_FILE:%=${MM2MON_PATH}/%}
COLOR  = ${COLOR_FILE:%=${COLOR_PATH}/%}

# All files
SCRIPTS = ${GDATE} ${MM2MON} ${COLOR}

# Installed files
GDATE_COPIED  = ${GDATE_FILE:%=${INSTALL}/%}
MM2MON_COPIED = ${MM2MON_FILE:%=${INSTALL}/%}
COLOR_COPIED  = ${COLOR_FILE:%=${INSTALL}/%}

# All installed files
COPIED = ${GDATE_COPIED} ${MM2MON_COPIED} ${COLOR_COPIED}

.PHONY : install uninstall

# Installer
install :
	cp -v ${SCRIPTS} ${INSTALL}/

# Uninstaller
uninstall :
	rm -fv ${COPIED}


