import _1 from './1.jpg'
import _2 from './2.jpg'
import _3 from './3.jpg'
import _4 from './4.jpg'
import _5 from './5.jpg'
import _6 from './6.jpg'
import _7 from './7.jpg'
import _8 from './8.jpg'
import _9 from './9.jpg'
import _10 from './10.jpg'
import _11 from './11.jpg'
import _12 from './12.jpg'
import _13 from './13.jpg'
import _14 from './14.jpg'
import _15 from './15.jpg'
import _16 from './16.jpg'
import _17 from './17.jpg'
import _18 from './18.jpg'
import _19 from './19.jpg'
import _20 from './20.jpg'
import _21 from './21.jpg'
import _22 from './22.jpg'
import _23 from './23.jpg'
import _24 from './24.jpg'
import _25 from './25.jpg'
import _26 from './26.jpg'
import _27 from './27.jpg'
import _28 from './28.jpg'
import _29 from './29.jpg'
import _30 from './30.jpg'
import _31 from './31.jpg'
import _32 from './32.jpg'
import _33 from './33.jpg'
import _34 from './34.jpg'
import _35 from './35.jpg'
import _36 from './36.jpg'
import _37 from './37.jpg'

import compressed_1 from './compressed/1.jpg'
import compressed_2 from './compressed/2.jpg'
import compressed_3 from './compressed/3.jpg'
import compressed_4 from './compressed/4.jpg'
import compressed_5 from './compressed/5.jpg'
import compressed_6 from './compressed/6.jpg'
import compressed_7 from './compressed/7.jpg'
import compressed_8 from './compressed/8.jpg'
import compressed_9 from './compressed/9.jpg'
import compressed_10 from './compressed/10.jpg'
import compressed_11 from './compressed/11.jpg'
import compressed_12 from './compressed/12.jpg'
import compressed_13 from './compressed/13.jpg'
import compressed_14 from './compressed/14.jpg'
import compressed_15 from './compressed/15.jpg'
import compressed_16 from './compressed/16.jpg'
import compressed_17 from './compressed/17.jpg'
import compressed_18 from './compressed/18.jpg'
import compressed_19 from './compressed/19.jpg'
import compressed_20 from './compressed/20.jpg'
import compressed_21 from './compressed/21.jpg'
import compressed_22 from './compressed/22.jpg'
import compressed_23 from './compressed/23.jpg'
import compressed_24 from './compressed/24.jpg'
import compressed_25 from './compressed/25.jpg'
import compressed_26 from './compressed/26.jpg'
import compressed_27 from './compressed/27.jpg'
import compressed_28 from './compressed/28.jpg'
import compressed_29 from './compressed/29.jpg'
import compressed_30 from './compressed/30.jpg'
import compressed_31 from './compressed/31.jpg'
import compressed_32 from './compressed/32.jpg'
import compressed_33 from './compressed/33.jpg'
import compressed_34 from './compressed/34.jpg'
import compressed_35 from './compressed/35.jpg'
import compressed_36 from './compressed/36.jpg'
import compressed_37 from './compressed/37.jpg'

const p = [
	_1,
	_2,
	_3,
	_4,
	_5,
	_6,
	_7,
	_8,
	_9,
	_10,
	_11,
	_12,
	_13,
	_14,
	_15,
	_16,
	_17,
	_18,
	_19,
	_20,
	_21,
	_22,
	_23,
	_24,
	_25,
	_26,
	_27,
	_28,
	_29,
	_30,
	_31,
	_32,
	_33,
	_34,
	_35,
	_36,
	_37,
]

export const photos = p.map((p,i) => {
	return {
		url: p, 
		id: i
	}
})

const c = [
	compressed_1,
	compressed_2,
	compressed_3,
	compressed_4,
	compressed_5,
	compressed_6,
	compressed_7,
	compressed_8,
	compressed_9,
	compressed_10,
	compressed_11,
	compressed_12,
	compressed_13,
	compressed_14,
	compressed_15,
	compressed_16,
	compressed_17,
	compressed_18,
	compressed_19,
	compressed_20,
	compressed_21,
	compressed_22,
	compressed_23,
	compressed_24,
	compressed_25,
	compressed_26,
	compressed_27,
	compressed_28,
	compressed_29,
	compressed_30,
	compressed_31,
	compressed_32,
	compressed_33,
	compressed_34,
	compressed_35,
	compressed_36,
	compressed_37,
]

export const compressedPhotos = c.map((c,i) => {
	return {
		url: c,
		id: i
	}
})