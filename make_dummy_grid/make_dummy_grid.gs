function main(args)
  resl = subwrd(args,1)
  lon0 = subwrd(args,2)
  lon1 = subwrd(args,3)
  lat0 = subwrd(args,4)
  lat1 = subwrd(args,5)
  if (resl = '')
    say 'Please set correct resolution value'
    exit
  endif
  NX = math_int((lon1-lon0)/resl) + 2
  NY = math_int((lat1-lat0)/resl) + 2
  ret = make_ctl(resl,lon0,lon1,lat0,lat1,NX,NY)
  ret = make_grid(NX,NY)
return

function make_ctl(resl,lon0,lon1,lat0,lat1,NX,NY)
  target = 'dummy_grid.ctl'
  '!echo "dset ^./dummy_grid.bin" > 'target
  '!echo "undef 9.99e+8" >> 'target
  '!echo "title Dummy Grid" >> 'target
  '!echo "options big_endian" >> 'target
  '!echo "xdef 'NX' linear 'lon0' 'resl'" >> 'target
  '!echo "ydef 'NY' linear 'lat0' 'resl'" >> 'target
  '!echo "zdef 1 linear 0 1" >> 'target
  '!echo "tdef 1 linear 00z01JAN2000 6hr" >> 'target
  '!echo "vars 1" >> 'target
  '!echo "dummy 1 99 Dummy Grid Point Value" >> 'target
  '!echo "ENDVARS" >> 'target
  '!echo " " >> 'target
return

function make_grid(NX,NY)
  fort = 'make_dummy_grid.f90'
  '!echo "program make_dummy_grid" > 'fort
  '!echo "  implicit none" >> 'fort
  '!echo "  integer, parameter :: nx='NX', ny='NY'" >> 'fort
  '!echo "  real(4), allocatable :: dummy(:,:)" >> 'fort
  '!echo "" >> 'fort
  '!echo "  allocate(dummy(nx,ny))" >> 'fort
  '!echo "  dummy(:,:) = 0.0" >> 'fort
  '!echo "  open(10,file=''dummy_grid.bin'',action=''write'',status=''replace'', &" >> 'fort
  '!echo "  &    access=''direct'',form=''unformatted'',recl=4*nx*ny)" >> 'fort
  '!echo "  write(10,rec=1) dummy(1:nx,1:ny)" >> 'fort
  '!echo "  deallocate(dummy)" >> 'fort
  '!echo "  close(10)" >> 'fort
  '!echo "end program make_dummy_grid" >> 'fort

  '!ifort -assume byterecl -convert big_endian -CB -traceback -o make_dummy_grid.exe make_dummy_grid.f90'
  '!./make_dummy_grid.exe'
  '!rm make_dummy_grid.f90'
  '!rm make_dummy_grid.exe'
return
