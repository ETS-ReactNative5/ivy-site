
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