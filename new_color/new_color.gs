function new_color(args)

* samle: SHOW -> Show color samle, FIG: output color sample figure
sample = 'SHOW'
n = 1
while(n <= 5)
  arg = subwrd(args,n)
  if (arg = '-sample')
    nn = n + 1
    sample = subwrd(args,nn)
  endif
  n = n + 1
endwhile

* Define new colors (number: 100 ~ 175)
rc = DefCols()
rc = ShowSample(sample)

function DefCols()
* white #ffffff
'set rgb 100 255 255 255 255'
* black #000000
'set rgb 101 0 0 0 255'
* maroon #800000
'set rgb 102 128 0 0 255' 
* red #ff0000
'set rgb 103 255 0 0 255'
* lightcoral #f08080
'set rgb 104 240 128 128 255'
* brown #a52a2a
'set rgb 105 165 42 42 255'
* mistyrose #ffe4e1
'set rgb 106 255 228 225 255'
* tomato #ff6347
'set rgb 107 255 99 71 255'
* coral #ff7f50
'set rgb 108 255 127 80 255'
* orangered #ff4500
'set rgb 109 255 69 0 255'
* saddlebrown #8b4513
'set rgb 110 139 69 19 255'
* peru #cd853f
'set rgb 111 205 133 63 255'
* darkorange #ff8c00
'set rgb 112 255 140 0 255'
* orange #ffa500
'set rgb 113 255 165 0 255'
* goldenrod #daa520
'set rgb 114 218 165 32 255'
* gold #ffd700
'set rgb 115 255 215 0 255'
* Khaki #f0e68c
'set rgb 116 240 230 140 255'
* darkkhaki #bdb76b
'set rgb 117 189 183 107 255'
* olive #808000
'set rgb 118 128 128 0 255'
* yellow #ffff00
'set rgb 119 255 255 0 255'
* lightgoldenrodyellow #fafad2
'set rgb 120 250 250 210 255'
* olivedrad #6b8e23
'set rgb 121 107 142 35 255'
* yellowgreen #9acd32
'set rgb 122 154 205 50 255'
* darkolivegreen #556b2f
'set rgb 123 85 107 47 255'
* greenyellow #adff2f
'set rgb 124 173 255 47 255'
* lawngreen #7cfc00
'set rgb 125 124 252 0 255'
* darkgreen #006400
'set rgb 126 0 100 0 255'
* green #008000
'set rgb 127 0 128 0 255'
* lime #00ff00
'set rgb 128 0 255 0 255'
* palegreen #98fb98
'set rgb 129 152 251 152 255'
* limegreen #32cd32
'set rgb 130 50 205 50 255'
* forestgreen #228b22
'set rgb 131 34 139 34 255'
* darkseagreen #8fbc8f
'set rgb 132 143 188 143 255'
* springgreen #00ff7f
'set rgb 133 0 255 127 255'
* mediumspringgreen #00fa9a
'set rgb 134 0 250 154 255'
* aquamarine #7fffd4
'set rgb 135 127 255 212 255'
* turquoise #40e0d0
'set rgb 136 64 224 208 255'
* lightseagreen #20b2aa
'set rgb 137 32 178 170 255'
* teal #008080
'set rgb 138 0 128 128 255'
* cyan #00ffff
'set rgb 139 0 255 255 255'
* lightcyan #e0ffff
'set rgb 140 224 255 255 255'
* paleturquoise #afeeee
'set rgb 141 175 238 238 255'
* darkslategray #2f4f4f
'set rgb 142 47 79 79 255'
* darkturquoise #00ced1
'set rgb 143 0 206 209 255'
* cadetblue #5f9ea0
'set rgb 144 95 158 160 255'
* powderblue #b0e0e6
'set rgb 145 176 224 230 255'
* deepskyblue #00bfff
'set rgb 146 0 191 255 255'
* skyblue #87ceeb
'set rgb 147 135 206 235 255'
* lightskyblue #87cefa
'set rgb 148 135 206 250 255'
* steelblue #4682b4
'set rgb 149 70 130 180 255'
* dodgerblue #1e90ff
'set rgb 150 30 144 255 255'
* lightslategrey #778899
'set rgb 151 119 136 153 255'
* lightsteelblue #b0c4de
'set rgb 152 176 196 222 255'
* royalblue #4169e1
'set rgb 153 65 105 225 255'
* navy #000080
'set rgb 154 0 0 128 255'
* darkblue #00008b
'set rgb 155 0 0 139 255'
* mediumblue #0000cd
'set rgb 156 0 0 205 255'
* blue #0000ff
'set rgb 157 0 0 255 255'
* lavender #e6e6fa
'set rgb 158 230 230 250 255'
* slateblue #6a5acd
'set rgb 159 106 90 205 255'
* darkslateblue #483d8b
'set rgb 160 72 61 139 255'
* mediumslateblue #7b68ee
'set rgb 161 123 104 238 255'
* mediumpurple #9370db
'set rgb 162 147 112 219 255'
* blueviolet #8a2be2
'set rgb 163 138 43 226 255'
* mediumorchid #ba55d3
'set rgb 164 186 85 211 255'
* purple #800080
'set rgb 165 128 0 128 255'
* magenta #ff00ff
'set rgb 166 255 0 255 255'
* violet #ee82ee
'set rgb 167 238 130 238 255'
* hotpink #ff69b4
'set rgb 168 255 105 180 255'
* crimson #dc143c
'set rgb 169 220 20 60 255'
* pink #ffc0cb
'set rgb 170 255 192 203 255'
* dimgrey #696969
'set rgb 171 105 105 105 255'
* gray #808080
'set rgb 172 128 128 128 255'
* darkgray #a9a9a9
'set rgb 173 169 169 169 255'
* silver #c0c0c0
'set rgb 174 192 192 192 255'
* lightgrey #d3d3d3
'set rgb 175 211 211 211 255'
return

function ShowSample(sample)
if (sample = 'SHOW' | sample = 'FIG')
  'set font 1'
  'set display color white'
  'c'

  n = 0
  while(n <= 95)

    m = math_mod(n,10)
    x1 = 0.5 + 1 * m
    x2 = x1 + 0.4
    if (n < 20)
      y = 8.15 - 0.82 * math_int(n / 10)
    else
      y = 7.95 - 0.82 * math_int(n / 10)
    endif
    y1 = y - 0.15
    y2 = y + 0.15

    if (n <= 19)
      nn = n
    else
      nn = n + 80
    endif
    'set line 'nn
    'draw recf 'x1' 'y1' 'x2' 'y2
    'set line 1 1 3'
    'draw rec 'x1' 'y1' 'x2' 'y2

    xc = x2 + 0.04
    yc = (y1 + y2) / 2
    'set strsiz 0.14 0.14'
    'set string 1 l 6'
    'draw string 'xc' 'yc' 'nn
 
    n = n + 1
  endwhile
  'set line 1 3 5'
  'draw rec  0.25 6.98 10.5 8.4'
endif

if (sample = 'FIG')
  'gxprint tmp.eps'
  '!convert -rotate 90 -density 300 tmp.eps color_sample.jpg'
  '!rm tmp.eps'
endif
return

