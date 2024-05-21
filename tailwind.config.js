/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "greyBg":"#F9FAFB",
        "whiteBg" : "#FFFFFF",
        "tryNow" : "#1570EF",
        "textSemiBoldBlackColor":"#101828",
        "textSemiBoldWhiteColor":"#FFFFFF",
        "textSemiBoldBlueColor":"#175CD3",
        "textRegularGreyColor":"#475467",
        "textRegularBlackColor":"#0F0322",
        "textRegularWhiteColor":"#FFFFFF",
        "textMediumWhiteColor":"#FFFFFF",
        "textMediumBlackColor":"#101828",
        "textMeidumBlueColor":"#175CD3",
        "textRegularLastColor":"#667085",
        "borderStroke" : "#B2DDFF",
        "carouselArrowBorderStroke" : "#EAECF0",
        "chipBorder" : "#D0D5DD",
        "faqClickColor":"#98A2B3",
        "chipBg" : "#EFF8FF",
        "borderStrokeJoin" : "#2E90FA",
      },
      backgroundImage : {
        "heroBackground" : "linear-gradient(to right bottom, #04397f, #004097, #0046af, #004cc7, #0051df, #0066ec, #007af6, #008eff, #00adff, #4ac8fb, #8de0f6, #caf4f7)",
        "slick1" : "linear-gradient(to bottom, #7f56d9, #8960e2, #936bec, #9d75f5, #a780ff)",
        "slick2" : "linear-gradient(to bottom, #079455, #209f63, #30aa70, #3eb57e, #4cc08c)",
        "slick3" : "linear-gradient(to bottom, #1570ef, #3481f4, #4c91f9, #63a1fc, #79b1ff)",
        "slick4" : "linear-gradient(to bottom, #dd2590, #e6409e, #ee55ac, #f768ba, #ff7ac8)",
        "phoneBgContainer" : "linear-gradient(to right bottom, #43cbff, #00afff, #008dff, #5d62f4, #9708cc)"
      },
      fontFamily : {
        'interSemibold' : ['Inter-SemiBold','sans-serif'],
        'interMedium' : ['Inter-Medium','sans-serif'],
        'interRegular' : ['Inter-Regular','sans-serif']
      }



    },
  },
  plugins: [],
}