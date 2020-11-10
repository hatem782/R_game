const data = [
    { time: 176, color: "purple", id: 0 }, { time: 183, color: "blue", id: 1 }, { time: 189, color: "purple", id: 2 }, { time: 195, color: "blue", id: 3 }, { time: 201, color: "orange", id: 4 }, { time: 207, color: "green", id: 5 }, { time: 211, color: "orange", id: 6 }, { time: 215, color: "orange", id: 7 }, { time: 220, color: "blue", id: 8 }, { time: 223, color: "blue", id: 9 }, { time: 227, color: "orange", id: 10 }, { time: 235, color: "purple", id: 11 }, { time: 240, color: "blue", id: 12 }, { time: 245, color: "purple", id: 13 }, { time: 249, color: "purple", id: 14 }, { time: 253, color: "blue", id: 15 }, { time: 257, color: "blue", id: 16 }, { time: 261, color: "purple", id: 17 }, { time: 268, color: "orange", id: 18 }, { time: 273, color: "green", id: 19 }, { time: 277, color: "orange", id: 20 }, { time: 284, color: "green", id: 21 }, { time: 290, color: "blue", id: 22 }, { time: 295, color: "orange", id: 23 }, { time: 301, color: "blue", id: 24 }, { time: 307, color: "purple", id: 25 }, { time: 312, color: "blue", id: 26 }, { time: 321, color: "orange", id: 27 }, { time: 325, color: "blue", id: 28 }, { time: 331, color: "purple", id: 29 }, { time: 336, color: "blue", id: 30 }, { time: 342, color: "orange", id: 31 }, { time: 345, color: "orange", id: 32 }, { time: 350, color: "green", id: 33 }, { time: 354, color: "orange", id: 34 }, { time: 358, color: "green", id: 35 }, { time: 362, color: "orange", id: 36 }, { time: 370, color: "blue", id: 37 }, { time: 375, color: "purple", id: 38 }, { time: 380, color: "blue", id: 39 }, { time: 384, color: "purple", id: 40 }, { time: 388, color: "blue", id: 41 }, { time: 392, color: "orange", id: 42 }, { time: 396, color: "blue", id: 43 }, { time: 405, color: "green", id: 44 }, { time: 411, color: "orange", id: 45 }, { time: 418, color: "blue", id: 46 }, { time: 425, color: "orange", id: 47 }, { time: 431, color: "blue", id: 48 }, { time: 437, color: "purple", id: 49 }, { time: 443, color: "blue", id: 50 }, { time: 447, color: "orange", id: 51 }, { time: 456, color: "green", id: 52 }, { time: 458, color: "green", id: 53 }, { time: 463, color: "orange", id: 54 }, { time: 467, color: "blue", id: 55 }, { time: 471, color: "orange", id: 56 }, { time: 477, color: "green", id: 57 }, { time: 481, color: "orange", id: 58 }, { time: 485, color: "orange", id: 59 }, { time: 489, color: "blue", id: 60 }, { time: 493, color: "orange", id: 61 }, { time: 498, color: "purple", id: 62 }, { time: 502, color: "blue", id: 63 }, { time: 506, color: "purple", id: 64 }, { time: 512, color: "orange", id: 65 }, { time: 516, color: "green", id: 66 }, { time: 519, color: "orange", id: 67 }, { time: 532, color: "blue", id: 68 }, { time: 532, color: "orange", id: 69 }, { time: 532, color: "green", id: 70 }, { time: 536, color: "orange", id: 71 }, { time: 540, color: "blue", id: 72 }, { time: 544, color: "blue", id: 73 }, { time: 548, color: "purple", id: 74 }, { time: 552, color: "blue", id: 75 }, { time: 556, color: "orange", id: 76 }, { time: 561, color: "green", id: 77 }, { time: 565, color: "orange", id: 78 }, { time: 570, color: "blue", id: 79 }, { time: 574, color: "orange", id: 80 }, { time: 578, color: "orange", id: 81 }, { time: 582, color: "blue", id: 82 }, { time: 591, color: "purple", id: 83 }, { time: 595, color: "purple", id: 84 }, { time: 599, color: "blue", id: 85 }, { time: 604, color: "orange", id: 86 }, { time: 608, color: "blue", id: 87 }, { time: 612, color: "purple", id: 88 }, { time: 616, color: "blue", id: 89 }, { time: 621, color: "orange", id: 90 }, { time: 625, color: "orange", id: 91 }, { time: 629, color: "green", id: 92 }, { time: 633, color: "green", id: 93 }, { time: 637, color: "orange", id: 94 }, { time: 641, color: "blue", id: 95 }, { time: 645, color: "orange", id: 96 }, { time: 649, color: "blue", id: 97 }, { time: 654, color: "purple", id: 98 }, { time: 658, color: "purple", id: 99 }, { time: 663, color: "blue", id: 100 }, { time: 667, color: "blue", id: 101 }, { time: 672, color: "orange", id: 102 }, { time: 674, color: "orange", id: 103 }, { time: 679, color: "green", id: 104 }, { time: 685, color: "blue", id: 105 }, { time: 688, color: "blue", id: 106 }, { time: 693, color: "orange", id: 107 }, { time: 696, color: "orange", id: 108 }, { time: 701, color: "purple", id: 109 }, { time: 705, color: "purple", id: 110 }, { time: 710, color: "orange", id: 111 }, { time: 712, color: "orange", id: 112 }, { time: 717, color: "blue", id: 113 }, { time: 729, color: "green", id: 114 }, { time: 734, color: "orange", id: 115 }, { time: 750, color: "blue", id: 116 }, { time: 760, color: "purple", id: 117 }, { time: 764, color: "purple", id: 118 }, { time: 768, color: "blue", id: 119 }, { time: 785, color: "green", id: 120 }, { time: 796, color: "orange", id: 121 }, { time: 802, color: "blue", id: 122 }, { time: 812, color: "purple", id: 123 }, { time: 818, color: "blue", id: 124 }, { time: 833, color: "orange", id: 125 }, { time: 837, color: "orange", id: 126 }, { time: 843, color: "green", id: 127 }, { time: 845, color: "green", id: 128 }, { time: 849, color: "orange", id: 129 }, { time: 853, color: "blue", id: 130 }, { time: 861, color: "purple", id: 131 }, { time: 865, color: "purple", id: 132 }, { time: 870, color: "blue", id: 133 }, { time: 877, color: "orange", id: 134 }, { time: 879, color: "orange", id: 135 }, { time: 883, color: "green", id: 136 }, { time: 887, color: "orange", id: 137 }, { time: 895, color: "blue", id: 138 }, { time: 899, color: "blue", id: 139 }, { time: 903, color: "purple", id: 140 }, { time: 912, color: "orange", id: 141 }, { time: 920, color: "green", id: 142 }, { time: 931, color: "blue", id: 143 }, { time: 936, color: "orange", id: 144 }, { time: 943, color: "purple", id: 145 }, { time: 944, color: "purple", id: 146 }, { time: 954, color: "blue", id: 147 }, { time: 956, color: "blue", id: 148 }, { time: 962, color: "orange", id: 149 }, { time: 964, color: "orange", id: 150 }, { time: 971, color: "green", id: 151 }, { time: 976, color: "orange", id: 152 }, { time: 978, color: "orange", id: 153 }, { time: 982, color: "blue", id: 154 }, { time: 987, color: "orange", id: 155 }, { time: 996, color: "purple", id: 156 }, { time: 1002, color: "blue", id: 157 }, { time: 1008, color: "purple", id: 158 }, { time: 1013, color: "orange", id: 159 }, { time: 1018, color: "green", id: 160 }, { time: 1022, color: "orange", id: 161 }, { time: 1026, color: "orange", id: 162 }, { time: 1031, color: "blue", id: 163 }, { time: 1034, color: "blue", id: 164 }, { time: 1039, color: "orange", id: 165 }, { time: 1047, color: "green", id: 166 }, { time: 1053, color: "orange", id: 167 }, { time: 1058, color: "blue", id: 168 }, { time: 1063, color: "purple", id: 169 }, { time: 1069, color: "blue", id: 170 }, { time: 1074, color: "purple", id: 171 }, { time: 1081, color: "orange", id: 172 }, { time: 1087, color: "green", id: 173 }, { time: 1091, color: "orange", id: 174 }, { time: 1096, color: "blue", id: 175 }, { time: 1102, color: "orange", id: 176 }, { time: 1107, color: "purple", id: 177 }, { time: 1112, color: "purple", id: 178 }, { time: 1119, color: "blue", id: 179 }, { time: 1123, color: "blue", id: 180 }, { time: 1131, color: "orange", id: 181 }, { time: 1137, color: "green", id: 182 }, { time: 1142, color: "orange", id: 183 }, { time: 1147, color: "green", id: 184 }, { time: 1152, color: "blue", id: 185 }, { time: 1156, color: "purple", id: 186 }, { time: 1164, color: "blue", id: 187 }, { time: 1170, color: "orange", id: 188 }, { time: 1174, color: "blue", id: 189 }, { time: 1182, color: "green", id: 190 }, { time: 1189, color: "orange", id: 191 }, { time: 1197, color: "blue", id: 192 }, { time: 1203, color: "orange", id: 193 }, { time: 1208, color: "purple", id: 194 }, { time: 1212, color: "purple", id: 195 }, { time: 1216, color: "blue", id: 196 }, { time: 1220, color: "orange", id: 197 }, { time: 1225, color: "green", id: 198 }, { time: 1231, color: "orange", id: 199 }, { time: 1237, color: "green", id: 200 }, { time: 1243, color: "blue", id: 201 }, { time: 1248, color: "purple", id: 202 }, { time: 1253, color: "blue", id: 203 }, { time: 1258, color: "orange", id: 204 }, { time: 1264, color: "orange", id: 205 }, { time: 1271, color: "orange", id: 206 }, { time: 1277, color: "orange", id: 207 }, { time: 1282, color: "green", id: 208 }, { time: 1288, color: "orange", id: 209 }, { time: 1292, color: "blue", id: 210 }, { time: 1296, color: "blue", id: 211 }, { time: 1301, color: "purple", id: 212 }, { time: 1305, color: "blue", id: 213 }, { time: 1309, color: "orange", id: 214 }, { time: 1318, color: "purple", id: 215 }, { time: 1322, color: "blue", id: 216 }, { time: 1326, color: "orange", id: 217 }, { time: 1335, color: "orange", id: 218 }, { time: 1339, color: "blue", id: 219 }, { time: 1343, color: "orange", id: 220 }, { time: 1351, color: "purple", id: 221 }, { time: 1358, color: "orange", id: 222 }, { time: 1364, color: "blue", id: 223 }, { time: 1371, color: "green", id: 224 }, { time: 1377, color: "orange", id: 225 }, { time: 1383, color: "blue", id: 226 }, { time: 1389, color: "purple", id: 227 }, { time: 1393, color: "blue", id: 228 }, { time: 1400, color: "orange", id: 229 }, { time: 1406, color: "blue", id: 230 }, { time: 1412, color: "purple", id: 231 }, { time: 1417, color: "orange", id: 232 }, { time: 1424, color: "orange", id: 233 }, { time: 1428, color: "green", id: 234 }, { time: 1432, color: "green", id: 235 }, { time: 1436, color: "orange", id: 236 }, { time: 1440, color: "orange", id: 237 }, { time: 1445, color: "blue", id: 238 }, { time: 1452, color: "orange", id: 239 }, { time: 1456, color: "blue", id: 240 }, { time: 1461, color: "purple", id: 241 }, { time: 1465, color: "blue", id: 242 }, { time: 1470, color: "orange", id: 243 }, { time: 1474, color: "blue", id: 244 }, { time: 1479, color: "green", id: 245 }, { time: 1486, color: "orange", id: 246 }, { time: 1493, color: "blue", id: 247 }, { time: 1500, color: "orange", id: 248 }, { time: 1507, color: "blue", id: 249 }, { time: 1513, color: "purple", id: 250 }, { time: 1524, color: "purple", id: 251 }, { time: 1530, color: "orange", id: 252 }, { time: 1538, color: "green", id: 253 }, { time: 1544, color: "green", id: 254 }, { time: 1549, color: "orange", id: 255 }, { time: 1553, color: "orange", id: 256 }, { time: 1558, color: "blue", id: 257 }, { time: 1562, color: "orange", id: 258 }, { time: 1566, color: "blue", id: 259 }, { time: 1570, color: "blue", id: 260 }, { time: 1574, color: "purple", id: 261 }, { time: 1578, color: "purple", id: 262 }, { time: 1583, color: "blue", id: 263 }, { time: 1587, color: "purple", id: 264 }, { time: 1592, color: "blue", id: 265 }, { time: 1596, color: "orange", id: 266 }, { time: 1600, color: "orange", id: 267 }, { time: 1605, color: "green", id: 268 }, { time: 1609, color: "orange", id: 269 }, { time: 1613, color: "blue", id: 270 }, { time: 1617, color: "blue", id: 271 }, { time: 1621, color: "orange", id: 272 }, { time: 1626, color: "green", id: 273 }, { time: 1630, color: "green", id: 274 }, { time: 1634, color: "orange", id: 275 }, { time: 1638, color: "orange", id: 276 }, { time: 1642, color: "orange", id: 277 }, { time: 1646, color: "blue", id: 278 }, { time: 1650, color: "blue", id: 279 }, { time: 1654, color: "orange", id: 280 }, { time: 1658, color: "blue", id: 281 }, { time: 1662, color: "orange", id: 282 }, { time: 1670, color: "green", id: 283 }, { time: 1675, color: "orange", id: 284 }, { time: 1679, color: "blue", id: 285 }, { time: 1684, color: "orange", id: 286 }, { time: 1688, color: "green", id: 287 }, { time: 1693, color: "orange", id: 288 }, { time: 1697, color: "blue", id: 289 }, { time: 1701, color: "orange", id: 290 }, { time: 1705, color: "green", id: 291 }, { time: 1709, color: "orange", id: 292 }, { time: 1713, color: "blue", id: 293 }, { time: 1716, color: "orange", id: 294 }, { time: 1719, color: "green", id: 295 }, { time: 1723, color: "orange", id: 296 }, { time: 1727, color: "blue", id: 297 }, { time: 1731, color: "orange", id: 298 }, { time: 1735, color: "green", id: 299 }, { time: 1739, color: "orange", id: 300 }, { time: 1742, color: "blue", id: 301 }, { time: 1746, color: "orange", id: 302 }, { time: 1750, color: "green", id: 303 }, { time: 1755, color: "orange", id: 304 }, { time: 1760, color: "blue", id: 305 }, { time: 1764, color: "blue", id: 306 }, { time: 1769, color: "purple", id: 307 }, { time: 1772, color: "purple", id: 308 }, { time: 1781, color: "orange", id: 309 }, { time: 1785, color: "green", id: 310 }, { time: 1793, color: "orange", id: 311 }, { time: 1805, color: "blue", id: 312 }, { time: 1809, color: "blue", id: 313 }, { time: 1825, color: "purple", id: 314 }, { time: 1835, color: "blue", id: 315 }, { time: 1839, color: "blue", id: 316 }, { time: 1851, color: "orange", id: 317 }, { time: 1859, color: "green", id: 318 }, { time: 1866, color: "orange", id: 319 }, { time: 1872, color: "blue", id: 320 }, { time: 1876, color: "orange", id: 321 }, { time: 1887, color: "purple", id: 322 }, { time: 1893, color: "blue", id: 323 }, { time: 1908, color: "orange", id: 324 }, { time: 1912, color: "orange", id: 325 }, { time: 1918, color: "green", id: 326 }, { time: 1923, color: "green", id: 327 }, { time: 1927, color: "orange", id: 328 }, { time: 1936, color: "blue", id: 329 }, { time: 1940, color: "blue", id: 330 }, { time: 1945, color: "purple", id: 331 }, { time: 1953, color: "blue", id: 332 }, { time: 1957, color: "blue", id: 333 }, { time: 1962, color: "purple", id: 334 }, { time: 1970, color: "orange", id: 335 }, { time: 1978, color: "purple", id: 336 }, { time: 1987, color: "blue", id: 337 }, { time: 1995, color: "purple", id: 338 }, { time: 2005, color: "orange", id: 339 }, { time: 2012, color: "green", id: 340 }, { time: 2017, color: "green", id: 341 }, { time: 2023, color: "orange", id: 342 }, { time: 2028, color: "blue", id: 343 }, { time: 2030, color: "blue", id: 344 }, { time: 2036, color: "purple", id: 345 }, { time: 2038, color: "purple", id: 346 }, { time: 2044, color: "blue", id: 347 }, { time: 2049, color: "orange", id: 348 }, { time: 2050, color: "orange", id: 349 }, { time: 2055, color: "green", id: 350 }, { time: 2059, color: "orange", id: 351 }, { time: 2067, color: "blue", id: 352 }, { time: 2073, color: "purple", id: 353 }, { time: 2078, color: "blue", id: 354 }, { time: 2081, color: "purple", id: 355 }, { time: 2087, color: "orange", id: 356 }, { time: 2092, color: "green", id: 357 }, { time: 2095, color: "orange", id: 358 }, { time: 2099, color: "orange", id: 359 }, { time: 2103, color: "blue", id: 360 }, { time: 2106, color: "purple", id: 361 }, { time: 2114, color: "orange", id: 362 }, { time: 2120, color: "blue", id: 363 }, { time: 2126, color: "green", id: 364 }, { time: 2129, color: "orange", id: 365 }, { time: 2133, color: "blue", id: 366 }, { time: 2136, color: "orange", id: 367 }, { time: 2140, color: "green", id: 368 }, { time: 2144, color: "orange", id: 369 }, { time: 2149, color: "blue", id: 370 }, { time: 2157, color: "purple", id: 371 }, { time: 2164, color: "blue", id: 372 }, { time: 2168, color: "purple", id: 373 }, { time: 2174, color: "purple", id: 374 }, { time: 2180, color: "purple", id: 375 }, { time: 2185, color: "blue", id: 376 }, { time: 2192, color: "orange", id: 377 }, { time: 2197, color: "green", id: 378 }, { time: 2201, color: "orange", id: 379 }, { time: 2205, color: "orange", id: 380 }, { time: 2209, color: "blue", id: 381 }, { time: 2213, color: "orange", id: 382 }, { time: 2221, color: "orange", id: 383 }, { time: 2226, color: "orange", id: 384 }, { time: 2230, color: "blue", id: 385 }, { time: 2238, color: "green", id: 386 }, { time: 2244, color: "green", id: 387 }, { time: 2249, color: "orange", id: 388 }, { time: 2254, color: "green", id: 389 }, { time: 2259, color: "orange", id: 390 }, { time: 2263, color: "orange", id: 391 }, { time: 2267, color: "blue", id: 392 }, { time: 2270, color: "orange", id: 393 }, { time: 2274, color: "blue", id: 394 }, { time: 2280, color: "blue", id: 395 }, { time: 2287, color: "blue", id: 396 }, { time: 2292, color: "blue", id: 397 }, { time: 2301, color: "orange", id: 398 }, { time: 2305, color: "orange", id: 399 }, { time: 2310, color: "green", id: 400 }, { time: 2316, color: "orange", id: 401 }, { time: 2319, color: "blue", id: 402 }, { time: 2323, color: "blue", id: 403 }, { time: 2326, color: "orange", id: 404 }, { time: 2330, color: "blue", id: 405 }, { time: 2333, color: "orange", id: 406 }, { time: 2339, color: "green", id: 407 }, { time: 2344, color: "orange", id: 408 }, { time: 2348, color: "blue", id: 409 }, { time: 2353, color: "purple", id: 410 }, { time: 2357, color: "blue", id: 411 }, { time: 2360, color: "orange", id: 412 }, { time: 2364, color: "green", id: 413 }, { time: 2369, color: "orange", id: 414 }, { time: 2374, color: "blue", id: 415 }, { time: 2389, color: "blue", id: 416 }, { time: 2394, color: "orange", id: 417 }, { time: 2400, color: "green", id: 418 }, { time: 2404, color: "orange", id: 419 }, { time: 2410, color: "blue", id: 420 }, { time: 2414, color: "blue", id: 421 }, { time: 2424, color: "orange", id: 422 }, { time: 2435, color: "orange", id: 423 }, { time: 2439, color: "blue", id: 424 }, { time: 2443, color: "purple", id: 425 }, { time: 2446, color: "blue", id: 426 }, { time: 2452, color: "orange", id: 427 }, { time: 2458, color: "green", id: 428 }, { time: 2462, color: "orange", id: 429 }, { time: 2466, color: "blue", id: 430 }, { time: 2469, color: "purple", id: 431 }, { time: 2475, color: "orange", id: 432 },
];




export { data };