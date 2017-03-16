import { LCARS } from '../../LCARS-javascript-lib-es6/src/LCARS';
import { ICONS } from '../../LCARS-javascript-lib-es6/src/ICONS';
import { LCARSCorner, LCARSText, LCARSRectangle, LCARSButton, LCARSTextArea, LCARSKeypad, LCARSClock, LCARSCalendar, LCARSIcon, LCARSEllipsisSpinner } from '../../LCARS-javascript-lib-es6/src/LCARSComponents';
import { LCARSBlankScreen, LCARSBasicScreen } from '../../LCARS-javascript-lib-es6/src/LCARSScreens';


LCARS.setFont("LCARS");

let testScreen = new LCARSBasicScreen('test', 'LCARS COMPONENT TEST SCREEN', 1920, 1550);
testScreen.setViewBox(0, 0, 1920, 1550);
document.body.appendChild(testScreen.element);

let ulc = new LCARSCorner("ULC", "Upper Left", 5, 100, 1000, 1, LCARS.ES_SHAPE_NW | LCARS.EC_ORANGE | LCARS.ES_STATIC);
testScreen.addComponent(ulc);
let llc = new LCARSCorner("LLC", "Lower Left", 5, 197, 1000, 1, LCARS.ES_SHAPE_SW | LCARS.EC_ORANGE | LCARS.ES_STATIC);
testScreen.addComponent(llc);
let urc = new LCARSCorner("URC", "Upper Right", 1010, 100, 905, 1, LCARS.ES_SHAPE_NE | LCARS.EC_ORANGE | LCARS.ES_STATIC);
testScreen.addComponent(urc);
let lrc = new LCARSCorner("LRC", "Lower Right", 1010, 197, 905, 1, LCARS.ES_SHAPE_SE | LCARS.EC_ORANGE | LCARS.ES_STATIC);
testScreen.addComponent(lrc);


let ulc1 = new LCARSCorner("ULC1", "Text", 5, 299, 500, 5, LCARS.ES_SHAPE_NW | LCARS.EC_WHITE | LCARS.ES_BLINKING);
testScreen.addComponent(ulc1);
let ulc2 = new LCARSCorner("ULC2", "Text", 160, 339, 500, 4, LCARS.ES_SHAPE_NW | LCARS.EC_L_BLUE);
testScreen.addComponent(ulc2);
let ulc3 = new LCARSCorner("ULC3", "Text", 320, 379, 500, 3, LCARS.ES_SHAPE_NW | LCARS.EC_M_BLUE);
testScreen.addComponent(ulc3);
let ulc4 = new LCARSCorner("ULC4", "Text", 480, 419, 500, 2, LCARS.ES_SHAPE_NW | LCARS.EC_BLUE);
testScreen.addComponent(ulc4);
let ulc5 = new LCARSCorner("ULC5", "Text", 640, 459, 500, 1, LCARS.ES_SHAPE_NW | LCARS.EC_D_BLUE);
testScreen.addComponent(ulc5);
let ulc6 = new LCARSCorner("ULC6", "Text", 800, 499, 500, 1, LCARS.ES_SHAPE_NW | LCARS.EC_YELLOW);
testScreen.addComponent(ulc6);
let ulc7 = new LCARSCorner("ULC7", "Text", 960, 539, 500, 1, LCARS.ES_SHAPE_NW | LCARS.EC_ORANGE);
testScreen.addComponent(ulc7);
let ulc8 = new LCARSCorner("ULC8", "Text", 1120, 579, 500, 1, LCARS.ES_SHAPE_NW | LCARS.EC_RED);
testScreen.addComponent(ulc8);
let text_corner = new LCARSText("text_corner", "LCARS Button Text Corner", 1625, 579 + LCARS.FONT_BUTTON_SIZE-3, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(text_corner);

let rect_1 = new LCARSRectangle("RECT1", "", 10, 675, 1000, 30, LCARS.EC_ORANGE | LCARS.ES_BLINKING);
testScreen.addComponent(rect_1);
rect_1.setVisible(false);
let rect_2 = new LCARSRectangle("RECT2", "rect2", 10, 750, 150, 60, LCARS.EC_ORANGE);
testScreen.addComponent(rect_2);
let rect_3 = new LCARSRectangle("RECT3", "rect3", 10, 820, 150, 60, LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_3);
let rect_4 = new LCARSRectangle("RECT4", "rect4", 10, 890, 150, 60, LCARS.ES_RECT_RND_W | LCARS.EC_ORANGE);
testScreen.addComponent(rect_4);
let rect_5 = new LCARSRectangle("RECT5", "rect5", 10, 960, 150, 60, LCARS.ES_RECT_RND_E | LCARS.EC_ORANGE);
testScreen.addComponent(rect_5);

let rect_c = new LCARSRectangle("rect_c", "CENTER", 500, 890, 150, 60, LCARS.ES_LABEL_C | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_c);
let rect_s = new LCARSRectangle("rect_s", "South", 500, 960, 150, 60, LCARS.ES_LABEL_S | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_s);
let rect_sw = new LCARSRectangle("rect_sw", "Southwest", 345, 960, 150, 60, LCARS.ES_LABEL_SW | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_sw);
let rect_w = new LCARSRectangle("rect_w", "West", 345, 890, 150, 60, LCARS.ES_LABEL_W | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_w);
let rect_nw = new LCARSRectangle("rect_nw", "Northwest", 345, 820, 150, 60, LCARS.ES_LABEL_NW | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_nw);
let rect_n = new LCARSRectangle("rect_n", "North", 500, 820, 150, 60, LCARS.ES_LABEL_N | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_n);
let rect_ne = new LCARSRectangle("rect_ne", "Northeast", 655, 820, 150, 60, LCARS.ES_LABEL_NE | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_ne);
let rect_e = new LCARSRectangle("rect_e", "East", 655, 890, 150, 60, LCARS.ES_LABEL_E | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_e);
let rect_se = new LCARSRectangle("rect_se", "Southeast", 655, 960, 150, 60, LCARS.ES_LABEL_SE | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
testScreen.addComponent(rect_se);

let button_1 = new LCARSButton("button_1", "Button 1", 850, 750, 1, LCARS.EC_ORANGE);
testScreen.addComponent(button_1);
let button_2 = new LCARSButton("button_2", "Button 2", 1005, 750, 2, LCARS.EC_ORANGE);
testScreen.addComponent(button_2);
let button_3 = new LCARSButton("button_3", "Button 3", 1160, 750, 3, LCARS.EC_ORANGE);
testScreen.addComponent(button_3);
let button_4 = new LCARSButton("button_4", "Button 4", 1315, 750, 4, LCARS.EC_ORANGE);
testScreen.addComponent(button_4);
let button_5 = new LCARSButton("button_5", "Button 5", 850, 945, 0, LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
button_5.setBlinking(true, LCARS.EC_D_BLUE, LCARS.BLINK_DURATION_WARNING);
testScreen.addComponent(button_5);
let button_6 = new LCARSButton("button_6", "Button 6", 1005, 945, 0, LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
button_6.setBlinking(true, null, LCARS.BLINK_DURATION_ERROR);
testScreen.addComponent(button_6);
let button_7 = new LCARSButton("button_7", "Button 7", 1160, 945, 0, LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
button_7.setBlinking(true);
testScreen.addComponent(button_7);

let text_1 = new LCARSText("text_1", "LCARS Title Text", 1490, 750 + LCARS.FONT_TITLE_SIZE, LCARS.EF_TITLE | LCARS.EC_ORANGE | LCARS.ES_BLINKING);
testScreen.addComponent(text_1);
let text_2 = new LCARSText("text_2", "LCARS Subtitle Text", 1490, 820 + LCARS.FONT_SUBTITLE_SIZE, LCARS.EF_SUBTITLE | LCARS.EC_ORANGE);
testScreen.addComponent(text_2);
let text_3 = new LCARSText("text_3", "LCARS Button Text", 1490, 870 + LCARS.FONT_BUTTON_SIZE, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(text_3);
let text_4 = new LCARSText("text_4", "LCARS Body Text", 1490, 905 + LCARS.FONT_BODY_SIZE, LCARS.EF_BODY | LCARS.EC_ORANGE);
testScreen.addComponent(text_4);
let text_5 = new LCARSText("text_5", "LCARS Tiny Text", 1490, 935 + LCARS.FONT_TINY_SIZE, LCARS.EF_TINY | LCARS.EC_ORANGE);
testScreen.addComponent(text_5);

let ellipsis_spinner = new LCARSEllipsisSpinner("ellipsis_t", 1820, 750 + LCARS.FONT_TITLE_SIZE, LCARS.EF_TITLE | LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner);
let ellipsis_spinner_st = new LCARSEllipsisSpinner("ellipsis_st", 1820, 820 + LCARS.FONT_SUBTITLE_SIZE, LCARS.EF_SUBTITLE | LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_st);
let ellipsis_spinner_button = new LCARSEllipsisSpinner("ellipsis_button", 1820, 870 + LCARS.FONT_BUTTON_SIZE, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_button);
let ellipsis_spinner_body = new LCARSEllipsisSpinner("ellipsis_body", 1820, 905 + LCARS.FONT_BODY_SIZE, LCARS.EF_BODY | LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_body);
let ellipsis_spinner_tiny = new LCARSEllipsisSpinner("ellipsis_tiny", 1820, 935 + LCARS.FONT_TINY_SIZE, LCARS.EF_TINY | LCARS.EC_ORANGE);
testScreen.addComponent(ellipsis_spinner_tiny);

let testListener = function(event) {
    console.log("testListener: " + event.target.id[0]);
}


let caption_keypad = new LCARSText("caption_keypad", "Keypad Test", 30, 1100 - 10, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(caption_keypad);

let keypad = new LCARSKeypad("keypad_1", 20, 1100, LCARS.EF_SUBTITLE | LCARS.ES_RECT_RND | LCARS.EC_ORANGE, LCARS.EKP_AUX_KEYS | LCARS.ES_LABEL_SW | LCARS.EF_BUTTON | LCARS.EC_BLUE);
keypad.addEventListener("click", testListener);
keypad.setAuxText("", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "ZERO", "STAR", "HASH");
keypad.setButtonAuxText("1", "ONE");
testScreen.addComponent(keypad);

let rect_text_width = new LCARSRectangle("rect_text_width", "", 600, 1100-5, 600, 5, LCARS.EC_ORANGE);
testScreen.addComponent(rect_text_width);
let caption_textarea = new LCARSText("caption_textarea", "Text Area Wrap Test", 600, 1100 - 10, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(caption_textarea);

let textArea = new LCARSTextArea("textArea", "", 600, 1100, 600, 12, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(textArea);

textArea.setNoWrap(false);
textArea.setLineSpacing(1.2);
textArea.appendLine("Ne malis tractatos vel. Mucius labores id mei. Per at purto sententiae appellantur. Id cibo vivendo epicuri nec. Nibh munere no mei, populo accusam vix ut, at mei epicuri dignissim. Prima laudem pri te.");
textArea.appendLine(" ");
textArea.appendLine("Eu mel regione luptatum adolescens, vim error graece ne, eu sea possim consectetuer. Id has copiosae praesent forensibus, bonorum qualisque sententiae nec in. Gubergren efficiantur te usu. Veniam aliquando repudiandae in nam, eu vel vituperata appellantur, eu civibus referrentur sit. Eius labores has an, per ea saperet nusquam indoctum. Est fugit forensibus ei. Appareat partiendo ut pro, at vocibus postulant pri, ea meis alienum accusamus cum.");


let rect_scrollingText_width = new LCARSRectangle("rect_scrollingText_width", "", 1490, 1100-5, 400, 5, LCARS.EC_ORANGE);
testScreen.addComponent(rect_scrollingText_width);
let caption_scrolling_textarea = new LCARSText("caption_scrolling_textarea", "Scrolling Text Area Test", 1490, 1100 - 10, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(caption_scrolling_textarea);

let scrollingTextArea = new LCARSTextArea("scrollingTextArea", "", 1490, 1100, 500, 10, LCARS.EF_BUTTON | LCARS.EC_ORANGE);
testScreen.addComponent(scrollingTextArea);

scrollingTextArea.setNoWrap(true);
scrollingTextArea.setTextFontSize(30);
scrollingTextArea.setLineSpacing(1.25);

let scrollTestInterval = setInterval(function() { textAreaScrollTest() }, 1000);

let clock_1 = new LCARSClock("clock_1", "LCARS clock_1 Text", 400, 175 + LCARS.FONT_TITLE_SIZE , LCARS.EF_TITLE | LCARS.EC_ORANGE, "dddd h:mm:ss TT d MMM yyyy");
testScreen.addComponent(clock_1);

clock_1.setTextFontSize(100);

setTimeout(function() { button_5.setBlinking(false) }, 3000);
setTimeout(function() { button_5.setBlinking(true, LCARS.EC_D_BLUE, LCARS.BLINK_DURATION_WARNING) }, 5000);
setTimeout(function() { button_5.setBlinking(false) }, 10000);

setInterval(function() { button_4.offBlink() }, 3000);
button_1.setVisible(false);
setInterval(function() { button_1.onBlink() }, 100);


//calendar = new LCARSCalendar("calendar test", "LCARS Body Text", 1490, 850 + LCARS.FONT_BODY_SIZE, LCARS.EF_BODY | LCARS.EC_ORANGE);
//testScreen.addComponent(calendar);

let count = 1;
let textAreaScrollTest = function () {
    scrollingTextArea.appendLine("added line " + count + " to test scrolling...");
    count += 10;
}

let powerButton = new LCARSButton("power_button", "", 180, 820, 0, LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
powerButton.setIcon(ICONS.POWER_BUTTON_SVG);
powerButton.setIconColor(LCARS.EC_BLUE);
powerButton.setIconPosition(LCARS.ES_LABEL_C);
testScreen.addComponent(powerButton);

let powerButton2 = new LCARSButton("power_button2", "Power", 180, 890, 0, LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
powerButton2.setIcon(ICONS.POWER_BUTTON_SVG);
powerButton2.setIconPosition(LCARS.ES_LABEL_W);
testScreen.addComponent(powerButton2);

let powerButton3 = new LCARSButton("power_button3", "Power", 180, 960, 0, LCARS.ES_LABEL_W | LCARS.ES_RECT_RND | LCARS.EC_ORANGE);
powerButton3.setIcon(ICONS.POWER_BUTTON_SVG);
powerButton3.setIconPosition(LCARS.ES_LABEL_E);
testScreen.addComponent(powerButton3);

let icon = new LCARSIcon("power_button_icon", "", 200, 750, LCARS.EC_ORANGE, ICONS.POWER_BUTTON_SVG);
testScreen.addComponent(icon);

let icon2 = new LCARSIcon("net_connection_icon", "", 265, 750, LCARS.EC_ORANGE, ICONS.NETWORK_CONNECTION);
testScreen.addComponent(icon2);

let icon3 = new LCARSIcon("net_connection_neg_icon", "", 330, 750, LCARS.EC_ORANGE, ICONS.NETWORK_CONNECTION_NEGATIVE);
testScreen.addComponent(icon3);

let icon4 = new LCARSIcon("battery_on_ac_icon", "", 395, 750, LCARS.EC_M_BLUE, ICONS.BATTERY_ON_AC);
testScreen.addComponent(icon4);

let icon5 = new LCARSIcon("battery_full_icon", "", 460, 750, LCARS.EC_M_BLUE, ICONS.BATTERY_FULL);
testScreen.addComponent(icon5);

let icon6 = new LCARSIcon("battery_half_icon", "", 525, 750, LCARS.EC_YELLOW, ICONS.BATTERY_HALF);
icon6.setBlinking(true);
testScreen.addComponent(icon6);

let icon7 = new LCARSIcon("battery_empty_icon", "", 590, 750, LCARS.EC_RED, ICONS.BATTERY_EMPTY);
icon7.setBlinking(true, null, LCARS.BLINK_DURATION_ERROR);
testScreen.addComponent(icon7);

let weather_icon_heat = new LCARSIcon("weather_heat_warn", "", 675, 300, LCARS.EC_RED, ICONS.WEATHER_HEAT_WARNING);
weather_icon_heat.setBlinking(true);
testScreen.addComponent(weather_icon_heat);

let weather_icon1 = new LCARSIcon("weather_clear_day", "", 740, 300, LCARS.EC_YELLOW, ICONS.WEATHER_CLEAR_DAY);
testScreen.addComponent(weather_icon1);

let weather_icon3 = new LCARSIcon("weather_clear_night", "", 805, 300, LCARS.EC_L_BLUE, ICONS.WEATHER_CLEAR_NIGHT);
testScreen.addComponent(weather_icon3);

let weather_icon4 = new LCARSIcon("weather_clear_moon", "", 870, 300, LCARS.EC_L_BLUE, ICONS.WEATHER_CLEAR_MOON_NIGHT);
testScreen.addComponent(weather_icon4);

let weather_icon2 = new LCARSIcon("weather_part_cloud_day", "", 935, 300, LCARS.EC_YELLOW, ICONS.WEATHER_PARTLY_CLOUDY_DAY);
testScreen.addComponent(weather_icon2);

let weather_icon5 = new LCARSIcon("weather_part_cloud_night", "", 1000, 300, LCARS.EC_L_BLUE, ICONS.WEATHER_PARTLY_CLOUDY_NIGHT);
testScreen.addComponent(weather_icon5);

let weather_icon6 = new LCARSIcon("weather_rain", "", 1065, 300, LCARS.EC_ORANGE, ICONS.WEATHER_RAIN);
testScreen.addComponent(weather_icon6);

let weather_icon7 = new LCARSIcon("weather_rain_heavy", "", 1130, 300, LCARS.EC_ORANGE, ICONS.WEATHER_RAIN_HEAVY);
testScreen.addComponent(weather_icon7);

let weather_icon8 = new LCARSIcon("weather_rain_light", "", 1195, 300, LCARS.EC_ORANGE, ICONS.WEATHER_RAIN_LIGHT);
testScreen.addComponent(weather_icon8);

let weather_icon9 = new LCARSIcon("weather_rain_chance_day", "", 1195, 360, LCARS.EC_YELLOW, ICONS.WEATHER_RAIN_CHANCE_DAY);
testScreen.addComponent(weather_icon9);

let weather_icon10 = new LCARSIcon("weather_rain_chance_night", "", 1195, 420, LCARS.EC_L_BLUE, ICONS.WEATHER_RAIN_CHANCE_NIGHT);
testScreen.addComponent(weather_icon10);

let weather_icon11 = new LCARSIcon("weather_snow", "", 1260, 300, LCARS.EC_WHITE, ICONS.WEATHER_SNOW);
testScreen.addComponent(weather_icon11);

let weather_icon12 = new LCARSIcon("weather_snow_heavy", "", 1325, 300, LCARS.EC_WHITE, ICONS.WEATHER_SNOW_HEAVY);
testScreen.addComponent(weather_icon12);

let weather_icon13 = new LCARSIcon("weather_snow_rain", "", 1390, 300, LCARS.EC_WHITE, ICONS.WEATHER_SNOW_RAIN);
testScreen.addComponent(weather_icon13);

let weather_icon14 = new LCARSIcon("weather_snow_chance_day", "", 1390, 360, LCARS.EC_WHITE, ICONS.WEATHER_SNOW_CHANCE_DAY);
testScreen.addComponent(weather_icon14);

let weather_icon15 = new LCARSIcon("weather_snow_chance_night", "", 1390, 420, LCARS.EC_L_BLUE, ICONS.WEATHER_SNOW_CHANCE_NIGHT);
testScreen.addComponent(weather_icon15);

let weather_icon16 = new LCARSIcon("weather_snow_blowing", "", 1455, 300, LCARS.EC_WHITE, ICONS.WEATHER_SNOW_BLOWING);
testScreen.addComponent(weather_icon16);

let weather_icon17 = new LCARSIcon("weather_wind", "", 1520, 300, LCARS.EC_WHITE, ICONS.WEATHER_WIND);
testScreen.addComponent(weather_icon17);

let weather_icon18 = new LCARSIcon("weather_hail", "", 1585, 300, LCARS.EC_ORANGE, ICONS.WEATHER_HAIL);
testScreen.addComponent(weather_icon18);

let weather_icon19 = new LCARSIcon("weather_lightning", "", 1650, 300, LCARS.EC_ORANGE, ICONS.WEATHER_LIGHTNING);
testScreen.addComponent(weather_icon19);

let weather_icon20 = new LCARSIcon("weather_rain-thunderstorm", "", 1715, 300, LCARS.EC_ORANGE, ICONS.WEATHER_RAIN_THUNDERSTORM);
testScreen.addComponent(weather_icon20);

let weather_icon21 = new LCARSIcon("weather_sun_rise", "", 1845, 300, LCARS.EC_YELLOW, ICONS.WEATHER_SUN_RISE);
testScreen.addComponent(weather_icon21);

let weather_icon22 = new LCARSIcon("weather_sun_set", "", 1845, 360, LCARS.EC_YELLOW, ICONS.WEATHER_SUN_SET);
testScreen.addComponent(weather_icon22);

let weather_icon23 = new LCARSIcon("weather_moon_rise", "", 1845, 420, LCARS.EC_L_BLUE, ICONS.WEATHER_MOON_RISE);
testScreen.addComponent(weather_icon23);

let weather_icon24 = new LCARSIcon("weather_moon_set", "", 1845, 480, LCARS.EC_L_BLUE, ICONS.WEATHER_MOON_SET);
testScreen.addComponent(weather_icon24);

let weather_icon25 = new LCARSIcon("weather_wind_breezy", "", 1520, 360, LCARS.EC_WHITE, ICONS.WEATHER_WIND_BREEZY);
testScreen.addComponent(weather_icon25);

let weather_icon26 = new LCARSIcon("weather_wind_cloudy", "", 1520, 420, LCARS.EC_WHITE, ICONS.WEATHER_WIND_CLOUDY);
testScreen.addComponent(weather_icon26);



