function main(args)
  var       = subwrd(args,1)
  N0        = subwrd(args,2)
  intp_type = subwrd(args,3)
  date      = subwrd(args,4) 
  resl      = subwrd(args,5)
  lon0      = subwrd(args,6)
  lon1      = subwrd(args,7)
  lat0      = subwrd(args,8)
  lat1      = subwrd(args,9)

  if (intp_type != 'bessel' && intp_type != 'bilin' && intp_typ != 'aave')
    say 'Invalid intp_type: 'intp_type
    exit
  endif

  rc = gsfallow('on')
  gdate = get_gdate(date)

* Make dummy grid
  'make_dummy_grid 'resl' 'lon0' 'lon1' 'lat0' 'lat1
  '!sed -i "s/00Z01JAN2000/'gdate'/g" dummy_grid.ctl'

* Interpolation
  'open dummy_grid.ctl'
  lin = sublin(result,2)
  N1 = subwrd(lin,8)
  'set lon 'lon0' 'lon1
  'set lat 'lat0' 'lat1
  'set time 'gdate
  say 'SET LON:'lon0'-'lon1
  say 'SET LAT:'lat0'-'lat1
  say 'SET DATE:'gdate
  'intp = lterp('var'.'N0',dummy.'N1','intp_type')'
  
* Output .bin file
  'set dfile 'N1
  'set lon 'lon0' 'lon1
  'set lat 'lat0' 'lat1
  'q dims'
  lin = sublin(result,2)
  x0  = subwrd(lin,11)
  x1  = subwrd(lin,13)
  lin = sublin(result,3)
  y0  = subwrd(lin,11)
  y1  = subwrd(lin,13)
  say 'NEW GRID: x = 'x0'-'x1
  say 'NEW GRID: y = 'y0'-'y1

  'set gxout fwrite'
  'set fwrite -be regrid.bin'
  'set  undef 9.99e+8'
  'set x 'x0' 'x1
  'set y 'y0' 'y1
  'set time 'gdate
  'd intp'
  'disable fwrite'
  'close 'N1

* Make .ctl file
  NX = x1 - x0 + 1
  NY = y1 - y0 + 1
  lon0 = lon0 + (x0 - 1) * resl
  lat0 = lat0 + (y0 - 1) * resl
  target = 'regrid.ctl'
  '!echo "dset ^./regrid.bin" > 'target
  '!echo "undef 9.99e+8" >> 'target
  '!echo "title Re-Grid Data" >> 'target
  '!echo "options big_endian" >> 'target
  '!echo "xdef 'NX' linear 'lon0' 'resl'" >> 'target
  '!echo "ydef 'NY' linear 'lat0' 'resl'" >> 'target
  '!echo "zdef 1 linear 0 1" >> 'target
  '!echo "tdef 1 linear 'gdate' 6hr" >> 'target
  '!echo "vars 1" >> 'target
  '!echo "'var' 0 99 Dummy Grid Point Value" >> 'target
  '!echo "endvars" >> 'target
  '!echo " " >> 'target

* Delete unnecessary files
  '!rm dummy_grid.ctl dummy_grid.bin'
