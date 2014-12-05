/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fluxweed\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-home': '&#xe600;',
		'icon-home2': '&#xe601;',
		'icon-home3': '&#xe602;',
		'icon-office': '&#xe603;',
		'icon-newspaper': '&#xe604;',
		'icon-pencil': '&#xe605;',
		'icon-pencil2': '&#xe606;',
		'icon-quill': '&#xe607;',
		'icon-pen': '&#xe608;',
		'icon-blog': '&#xe609;',
		'icon-droplet': '&#xe60a;',
		'icon-paint-format': '&#xe60b;',
		'icon-image': '&#xe60c;',
		'icon-image2': '&#xe60d;',
		'icon-images': '&#xe60e;',
		'icon-camera': '&#xe60f;',
		'icon-music': '&#xe610;',
		'icon-headphones': '&#xe611;',
		'icon-play': '&#xe612;',
		'icon-film': '&#xe613;',
		'icon-camera2': '&#xe614;',
		'icon-dice': '&#xe615;',
		'icon-pacman': '&#xe616;',
		'icon-spades': '&#xe617;',
		'icon-clubs': '&#xe618;',
		'icon-diamonds': '&#xe619;',
		'icon-pawn': '&#xe61a;',
		'icon-bullhorn': '&#xe61b;',
		'icon-connection': '&#xe61c;',
		'icon-podcast': '&#xe61d;',
		'icon-feed': '&#xe61e;',
		'icon-book': '&#xe61f;',
		'icon-books': '&#xe620;',
		'icon-library': '&#xe621;',
		'icon-file': '&#xe622;',
		'icon-profile': '&#xe623;',
		'icon-file2': '&#xe624;',
		'icon-file3': '&#xe625;',
		'icon-file4': '&#xe626;',
		'icon-copy': '&#xe627;',
		'icon-copy2': '&#xe628;',
		'icon-copy3': '&#xe629;',
		'icon-paste': '&#xe62a;',
		'icon-paste2': '&#xe62b;',
		'icon-paste3': '&#xe62c;',
		'icon-stack': '&#xe62d;',
		'icon-folder': '&#xe62e;',
		'icon-folder-open': '&#xe62f;',
		'icon-tag': '&#xe630;',
		'icon-tags': '&#xe631;',
		'icon-barcode': '&#xe632;',
		'icon-qrcode': '&#xe633;',
		'icon-ticket': '&#xe634;',
		'icon-cart': '&#xe635;',
		'icon-cart2': '&#xe636;',
		'icon-cart3': '&#xe637;',
		'icon-coin': '&#xe638;',
		'icon-credit': '&#xe639;',
		'icon-calculate': '&#xe63a;',
		'icon-support': '&#xe63b;',
		'icon-phone': '&#xe63c;',
		'icon-phone-hang-up': '&#xe63d;',
		'icon-address-book': '&#xe63e;',
		'icon-notebook': '&#xe63f;',
		'icon-envelop': '&#xe640;',
		'icon-pushpin': '&#xe641;',
		'icon-location': '&#xe642;',
		'icon-location2': '&#xe643;',
		'icon-compass': '&#xe644;',
		'icon-map': '&#xe645;',
		'icon-map2': '&#xe646;',
		'icon-history': '&#xe647;',
		'icon-clock': '&#xe648;',
		'icon-clock2': '&#xe649;',
		'icon-alarm': '&#xe64a;',
		'icon-alarm2': '&#xe64b;',
		'icon-bell': '&#xe64c;',
		'icon-stopwatch': '&#xe64d;',
		'icon-calendar': '&#xe64e;',
		'icon-calendar2': '&#xe64f;',
		'icon-print': '&#xe650;',
		'icon-keyboard': '&#xe651;',
		'icon-screen': '&#xe652;',
		'icon-laptop': '&#xe653;',
		'icon-mobile': '&#xe654;',
		'icon-mobile2': '&#xe655;',
		'icon-tablet': '&#xe656;',
		'icon-tv': '&#xe657;',
		'icon-cabinet': '&#xe658;',
		'icon-drawer': '&#xe659;',
		'icon-drawer2': '&#xe65a;',
		'icon-drawer3': '&#xe65b;',
		'icon-box-add': '&#xe65c;',
		'icon-box-remove': '&#xe65d;',
		'icon-download': '&#xe65e;',
		'icon-upload': '&#xe65f;',
		'icon-disk': '&#xe660;',
		'icon-storage': '&#xe661;',
		'icon-undo': '&#xe662;',
		'icon-redo': '&#xe663;',
		'icon-flip': '&#xe664;',
		'icon-flip2': '&#xe665;',
		'icon-undo2': '&#xe666;',
		'icon-redo2': '&#xe667;',
		'icon-forward': '&#xe668;',
		'icon-reply': '&#xe669;',
		'icon-bubble': '&#xe66a;',
		'icon-bubbles': '&#xe66b;',
		'icon-bubbles2': '&#xe66c;',
		'icon-bubble2': '&#xe66d;',
		'icon-bubbles3': '&#xe66e;',
		'icon-bubbles4': '&#xe66f;',
		'icon-user': '&#xe670;',
		'icon-users': '&#xe671;',
		'icon-user2': '&#xe672;',
		'icon-users2': '&#xe673;',
		'icon-user3': '&#xe674;',
		'icon-user4': '&#xe675;',
		'icon-quotes-left': '&#xe676;',
		'icon-busy': '&#xe677;',
		'icon-spinner': '&#xe678;',
		'icon-spinner2': '&#xe679;',
		'icon-spinner3': '&#xe67a;',
		'icon-spinner4': '&#xe67b;',
		'icon-spinner5': '&#xe67c;',
		'icon-spinner6': '&#xe67d;',
		'icon-binoculars': '&#xe67e;',
		'icon-search': '&#xe67f;',
		'icon-zoom-in': '&#xe680;',
		'icon-zoom-out': '&#xe681;',
		'icon-expand': '&#xe682;',
		'icon-contract': '&#xe683;',
		'icon-expand2': '&#xe684;',
		'icon-contract2': '&#xe685;',
		'icon-key': '&#xe686;',
		'icon-key2': '&#xe687;',
		'icon-lock': '&#xe688;',
		'icon-lock2': '&#xe689;',
		'icon-unlocked': '&#xe68a;',
		'icon-wrench': '&#xe68b;',
		'icon-settings': '&#xe68c;',
		'icon-equalizer': '&#xe68d;',
		'icon-cog': '&#xe68e;',
		'icon-cogs': '&#xe68f;',
		'icon-cog2': '&#xe690;',
		'icon-hammer': '&#xe691;',
		'icon-wand': '&#xe692;',
		'icon-aid': '&#xe693;',
		'icon-bug': '&#xe694;',
		'icon-pie': '&#xe695;',
		'icon-stats': '&#xe696;',
		'icon-bars': '&#xe697;',
		'icon-bars2': '&#xe698;',
		'icon-gift': '&#xe699;',
		'icon-trophy': '&#xe69a;',
		'icon-glass': '&#xe69b;',
		'icon-mug': '&#xe69c;',
		'icon-food': '&#xe69d;',
		'icon-leaf': '&#xe69e;',
		'icon-rocket': '&#xe69f;',
		'icon-meter': '&#xe6a0;',
		'icon-meter2': '&#xe6a1;',
		'icon-dashboard': '&#xe6a2;',
		'icon-hammer2': '&#xe6a3;',
		'icon-fire': '&#xe6a4;',
		'icon-lab': '&#xe6a5;',
		'icon-magnet': '&#xe6a6;',
		'icon-remove': '&#xe6a7;',
		'icon-remove2': '&#xe6a8;',
		'icon-briefcase': '&#xe6a9;',
		'icon-airplane': '&#xe6aa;',
		'icon-truck': '&#xe6ab;',
		'icon-road': '&#xe6ac;',
		'icon-accessibility': '&#xe6ad;',
		'icon-target': '&#xe6ae;',
		'icon-shield': '&#xe6af;',
		'icon-lightning': '&#xe6b0;',
		'icon-switch': '&#xe6b1;',
		'icon-power-cord': '&#xe6b2;',
		'icon-signup': '&#xe6b3;',
		'icon-list': '&#xe6b4;',
		'icon-list2': '&#xe6b5;',
		'icon-numbered-list': '&#xe6b6;',
		'icon-menu': '&#xe6b7;',
		'icon-menu2': '&#xe6b8;',
		'icon-tree': '&#xe6b9;',
		'icon-cloud': '&#xe6ba;',
		'icon-cloud-download': '&#xe6bb;',
		'icon-cloud-upload': '&#xe6bc;',
		'icon-download2': '&#xe6bd;',
		'icon-upload2': '&#xe6be;',
		'icon-download3': '&#xe6bf;',
		'icon-upload3': '&#xe6c0;',
		'icon-globe': '&#xe6c1;',
		'icon-earth': '&#xe6c2;',
		'icon-link': '&#xe6c3;',
		'icon-flag': '&#xe6c4;',
		'icon-attachment': '&#xe6c5;',
		'icon-eye': '&#xe6c6;',
		'icon-eye-blocked': '&#xe6c7;',
		'icon-eye2': '&#xe6c8;',
		'icon-bookmark': '&#xe6c9;',
		'icon-bookmarks': '&#xe6ca;',
		'icon-brightness-medium': '&#xe6cb;',
		'icon-brightness-contrast': '&#xe6cc;',
		'icon-contrast': '&#xe6cd;',
		'icon-star': '&#xe6ce;',
		'icon-star2': '&#xe6cf;',
		'icon-star3': '&#xe6d0;',
		'icon-heart': '&#xe6d1;',
		'icon-heart2': '&#xe6d2;',
		'icon-heart-broken': '&#xe6d3;',
		'icon-thumbs-up': '&#xe6d4;',
		'icon-thumbs-up2': '&#xe6d5;',
		'icon-happy': '&#xe6d6;',
		'icon-happy2': '&#xe6d7;',
		'icon-smiley': '&#xe6d8;',
		'icon-smiley2': '&#xe6d9;',
		'icon-tongue': '&#xe6da;',
		'icon-tongue2': '&#xe6db;',
		'icon-sad': '&#xe6dc;',
		'icon-sad2': '&#xe6dd;',
		'icon-wink': '&#xe6de;',
		'icon-wink2': '&#xe6df;',
		'icon-grin': '&#xe6e0;',
		'icon-grin2': '&#xe6e1;',
		'icon-cool': '&#xe6e2;',
		'icon-cool2': '&#xe6e3;',
		'icon-angry': '&#xe6e4;',
		'icon-angry2': '&#xe6e5;',
		'icon-evil': '&#xe6e6;',
		'icon-evil2': '&#xe6e7;',
		'icon-shocked': '&#xe6e8;',
		'icon-shocked2': '&#xe6e9;',
		'icon-confused': '&#xe6ea;',
		'icon-confused2': '&#xe6eb;',
		'icon-neutral': '&#xe6ec;',
		'icon-neutral2': '&#xe6ed;',
		'icon-wondering': '&#xe6ee;',
		'icon-wondering2': '&#xe6ef;',
		'icon-point-up': '&#xe6f0;',
		'icon-point-right': '&#xe6f1;',
		'icon-point-down': '&#xe6f2;',
		'icon-point-left': '&#xe6f3;',
		'icon-warning': '&#xe6f4;',
		'icon-notification': '&#xe6f5;',
		'icon-question': '&#xe6f6;',
		'icon-info': '&#xe6f7;',
		'icon-info2': '&#xe6f8;',
		'icon-blocked': '&#xe6f9;',
		'icon-cancel-circle': '&#xe6fa;',
		'icon-checkmark-circle': '&#xe6fb;',
		'icon-spam': '&#xe6fc;',
		'icon-close': '&#xe6fd;',
		'icon-checkmark': '&#xe6fe;',
		'icon-checkmark2': '&#xe6ff;',
		'icon-spell-check': '&#xe700;',
		'icon-minus': '&#xe701;',
		'icon-plus': '&#xe702;',
		'icon-enter': '&#xe703;',
		'icon-exit': '&#xe704;',
		'icon-play2': '&#xe705;',
		'icon-pause': '&#xe706;',
		'icon-stop': '&#xe707;',
		'icon-backward': '&#xe708;',
		'icon-forward2': '&#xe709;',
		'icon-play3': '&#xe70a;',
		'icon-pause2': '&#xe70b;',
		'icon-stop2': '&#xe70c;',
		'icon-backward2': '&#xe70d;',
		'icon-forward3': '&#xe70e;',
		'icon-first': '&#xe70f;',
		'icon-last': '&#xe710;',
		'icon-previous': '&#xe711;',
		'icon-next': '&#xe712;',
		'icon-eject': '&#xe713;',
		'icon-volume-high': '&#xe714;',
		'icon-volume-medium': '&#xe715;',
		'icon-volume-low': '&#xe716;',
		'icon-volume-mute': '&#xe717;',
		'icon-volume-mute2': '&#xe718;',
		'icon-volume-increase': '&#xe719;',
		'icon-volume-decrease': '&#xe71a;',
		'icon-loop': '&#xe71b;',
		'icon-loop2': '&#xe71c;',
		'icon-loop3': '&#xe71d;',
		'icon-shuffle': '&#xe71e;',
		'icon-arrow-up-left': '&#xe71f;',
		'icon-arrow-up': '&#xe720;',
		'icon-arrow-up-right': '&#xe721;',
		'icon-arrow-right': '&#xe722;',
		'icon-arrow-down-right': '&#xe723;',
		'icon-arrow-down': '&#xe724;',
		'icon-arrow-down-left': '&#xe725;',
		'icon-arrow-left': '&#xe726;',
		'icon-arrow-up-left2': '&#xe727;',
		'icon-arrow-up2': '&#xe728;',
		'icon-arrow-up-right2': '&#xe729;',
		'icon-arrow-right2': '&#xe72a;',
		'icon-arrow-down-right2': '&#xe72b;',
		'icon-arrow-down2': '&#xe72c;',
		'icon-arrow-down-left2': '&#xe72d;',
		'icon-arrow-left2': '&#xe72e;',
		'icon-arrow-up-left3': '&#xe72f;',
		'icon-arrow-up3': '&#xe730;',
		'icon-arrow-up-right3': '&#xe731;',
		'icon-arrow-right3': '&#xe732;',
		'icon-arrow-down-right3': '&#xe733;',
		'icon-arrow-down3': '&#xe734;',
		'icon-arrow-down-left3': '&#xe735;',
		'icon-arrow-left3': '&#xe736;',
		'icon-tab': '&#xe737;',
		'icon-checkbox-checked': '&#xe738;',
		'icon-checkbox-unchecked': '&#xe739;',
		'icon-checkbox-partial': '&#xe73a;',
		'icon-radio-checked': '&#xe73b;',
		'icon-radio-unchecked': '&#xe73c;',
		'icon-crop': '&#xe73d;',
		'icon-scissors': '&#xe73e;',
		'icon-filter': '&#xe73f;',
		'icon-filter2': '&#xe740;',
		'icon-font': '&#xe741;',
		'icon-text-height': '&#xe742;',
		'icon-text-width': '&#xe743;',
		'icon-bold': '&#xe744;',
		'icon-underline': '&#xe745;',
		'icon-italic': '&#xe746;',
		'icon-strikethrough': '&#xe747;',
		'icon-omega': '&#xe748;',
		'icon-sigma': '&#xe749;',
		'icon-table': '&#xe74a;',
		'icon-table2': '&#xe74b;',
		'icon-insert-template': '&#xe74c;',
		'icon-pilcrow': '&#xe74d;',
		'icon-left-toright': '&#xe74e;',
		'icon-right-toleft': '&#xe74f;',
		'icon-paragraph-left': '&#xe750;',
		'icon-paragraph-center': '&#xe751;',
		'icon-paragraph-right': '&#xe752;',
		'icon-paragraph-justify': '&#xe753;',
		'icon-paragraph-left2': '&#xe754;',
		'icon-paragraph-center2': '&#xe755;',
		'icon-paragraph-right2': '&#xe756;',
		'icon-paragraph-justify2': '&#xe757;',
		'icon-indent-increase': '&#xe758;',
		'icon-indent-decrease': '&#xe759;',
		'icon-new-tab': '&#xe75a;',
		'icon-embed': '&#xe75b;',
		'icon-code': '&#xe75c;',
		'icon-console': '&#xe75d;',
		'icon-share': '&#xe75e;',
		'icon-mail': '&#xe75f;',
		'icon-mail2': '&#xe760;',
		'icon-mail3': '&#xe761;',
		'icon-mail4': '&#xe762;',
		'icon-google': '&#xe763;',
		'icon-google-plus': '&#xe764;',
		'icon-google-plus2': '&#xe765;',
		'icon-google-plus3': '&#xe766;',
		'icon-google-plus4': '&#xe767;',
		'icon-google-drive': '&#xe768;',
		'icon-facebook': '&#xe769;',
		'icon-facebook2': '&#xe76a;',
		'icon-facebook3': '&#xe76b;',
		'icon-instagram': '&#xe76c;',
		'icon-twitter': '&#xe76d;',
		'icon-twitter2': '&#xe76e;',
		'icon-twitter3': '&#xe76f;',
		'icon-feed2': '&#xe770;',
		'icon-feed3': '&#xe771;',
		'icon-feed4': '&#xe772;',
		'icon-youtube': '&#xe773;',
		'icon-youtube2': '&#xe774;',
		'icon-vimeo': '&#xe775;',
		'icon-vimeo2': '&#xe776;',
		'icon-vimeo3': '&#xe777;',
		'icon-lanyrd': '&#xe778;',
		'icon-flickr': '&#xe779;',
		'icon-flickr2': '&#xe77a;',
		'icon-flickr3': '&#xe77b;',
		'icon-flickr4': '&#xe77c;',
		'icon-picassa': '&#xe77d;',
		'icon-picassa2': '&#xe77e;',
		'icon-dribbble': '&#xe77f;',
		'icon-dribbble2': '&#xe780;',
		'icon-dribbble3': '&#xe781;',
		'icon-forrst': '&#xe782;',
		'icon-forrst2': '&#xe783;',
		'icon-deviantart': '&#xe784;',
		'icon-deviantart2': '&#xe785;',
		'icon-steam': '&#xe786;',
		'icon-steam2': '&#xe787;',
		'icon-github': '&#xe788;',
		'icon-github2': '&#xe789;',
		'icon-github3': '&#xe78a;',
		'icon-github4': '&#xe78b;',
		'icon-github5': '&#xe78c;',
		'icon-wordpress': '&#xe78d;',
		'icon-wordpress2': '&#xe78e;',
		'icon-joomla': '&#xe78f;',
		'icon-blogger': '&#xe790;',
		'icon-blogger2': '&#xe791;',
		'icon-tumblr': '&#xe792;',
		'icon-tumblr2': '&#xe793;',
		'icon-yahoo': '&#xe794;',
		'icon-tux': '&#xe795;',
		'icon-apple': '&#xe796;',
		'icon-finder': '&#xe797;',
		'icon-android': '&#xe798;',
		'icon-windows': '&#xe799;',
		'icon-windows8': '&#xe79a;',
		'icon-soundcloud': '&#xe79b;',
		'icon-soundcloud2': '&#xe79c;',
		'icon-skype': '&#xe79d;',
		'icon-reddit': '&#xe79e;',
		'icon-linkedin': '&#xe79f;',
		'icon-lastfm': '&#xe7a0;',
		'icon-lastfm2': '&#xe7a1;',
		'icon-delicious': '&#xe7a2;',
		'icon-stumbleupon': '&#xe7a3;',
		'icon-stumbleupon2': '&#xe7a4;',
		'icon-stackoverflow': '&#xe7a5;',
		'icon-pinterest': '&#xe7a6;',
		'icon-pinterest2': '&#xe7a7;',
		'icon-xing': '&#xe7a8;',
		'icon-xing2': '&#xe7a9;',
		'icon-flattr': '&#xe7aa;',
		'icon-foursquare': '&#xe7ab;',
		'icon-foursquare2': '&#xe7ac;',
		'icon-paypal': '&#xe7ad;',
		'icon-paypal2': '&#xe7ae;',
		'icon-paypal3': '&#xe7af;',
		'icon-yelp': '&#xe7b0;',
		'icon-libreoffice': '&#xe7b1;',
		'icon-file-pdf': '&#xe7b2;',
		'icon-file-openoffice': '&#xe7b3;',
		'icon-file-word': '&#xe7b4;',
		'icon-file-excel': '&#xe7b5;',
		'icon-file-zip': '&#xe7b6;',
		'icon-file-powerpoint': '&#xe7b7;',
		'icon-file-xml': '&#xe7b8;',
		'icon-file-css': '&#xe7b9;',
		'icon-html5': '&#xe7ba;',
		'icon-html52': '&#xe7bb;',
		'icon-css3': '&#xe7bc;',
		'icon-chrome': '&#xe7bd;',
		'icon-firefox': '&#xe7be;',
		'icon-IE': '&#xe7bf;',
		'icon-opera': '&#xe7c0;',
		'icon-safari': '&#xe7c1;',
		'icon-IcoMoon': '&#xe7c2;',
		'icon-warning2': '&#xe7c3;',
		'icon-cloud2': '&#xe7c4;',
		'icon-locked': '&#xe7c5;',
		'icon-inbox': '&#xe7c6;',
		'icon-comment': '&#xe7c7;',
		'icon-mic': '&#xe7c8;',
		'icon-envelope': '&#xe7c9;',
		'icon-briefcase2': '&#xe7ca;',
		'icon-cart4': '&#xe7cb;',
		'icon-contrast2': '&#xe7cc;',
		'icon-clock3': '&#xe7cd;',
		'icon-user5': '&#xe7ce;',
		'icon-cog3': '&#xe7cf;',
		'icon-music2': '&#xe7d0;',
		'icon-twitter4': '&#xe7d1;',
		'icon-pencil3': '&#xe7d2;',
		'icon-frame': '&#xe7d3;',
		'icon-switch2': '&#xe7d4;',
		'icon-star4': '&#xe7d5;',
		'icon-key3': '&#xe7d6;',
		'icon-chart': '&#xe7d7;',
		'icon-apple2': '&#xe7d8;',
		'icon-file5': '&#xe7d9;',
		'icon-plus2': '&#xe7da;',
		'icon-minus2': '&#xe7db;',
		'icon-picture': '&#xe7dc;',
		'icon-folder2': '&#xe7dd;',
		'icon-camera3': '&#xe7de;',
		'icon-search2': '&#xe7df;',
		'icon-dribbble4': '&#xe7e0;',
		'icon-forrst3': '&#xe7e1;',
		'icon-feed5': '&#xe7e2;',
		'icon-blocked2': '&#xe7e3;',
		'icon-target2': '&#xe7e4;',
		'icon-play4': '&#xe7e5;',
		'icon-pause3': '&#xe7e6;',
		'icon-bug2': '&#xe7e7;',
		'icon-console2': '&#xe7e8;',
		'icon-film2': '&#xe7e9;',
		'icon-type': '&#xe7ea;',
		'icon-home4': '&#xe7eb;',
		'icon-earth2': '&#xe7ec;',
		'icon-location3': '&#xe7ed;',
		'icon-info3': '&#xe7ee;',
		'icon-eye3': '&#xe7ef;',
		'icon-heart3': '&#xe7f0;',
		'icon-bookmark2': '&#xe7f1;',
		'icon-wrench2': '&#xe7f2;',
		'icon-calendar3': '&#xe7f3;',
		'icon-window': '&#xe7f4;',
		'icon-monitor': '&#xe7f5;',
		'icon-mobile3': '&#xe7f6;',
		'icon-droplet2': '&#xe7f7;',
		'icon-mouse': '&#xe7f8;',
		'icon-refresh': '&#xe7f9;',
		'icon-location4': '&#xe7fa;',
		'icon-tag2': '&#xe7fb;',
		'icon-phone2': '&#xe7fc;',
		'icon-star5': '&#xe7fd;',
		'icon-pointer': '&#xe7fe;',
		'icon-thumbs-up3': '&#xe7ff;',
		'icon-thumbs-down': '&#xe800;',
		'icon-headphones2': '&#xe801;',
		'icon-move': '&#xe802;',
		'icon-checkmark3': '&#xe803;',
		'icon-cancel': '&#xe804;',
		'icon-skype2': '&#xe805;',
		'icon-gift2': '&#xe806;',
		'icon-cone': '&#xe807;',
		'icon-alarm3': '&#xe808;',
		'icon-coffee': '&#xe809;',
		'icon-basket': '&#xe80a;',
		'icon-flag2': '&#xe80b;',
		'icon-ipod': '&#xe80c;',
		'icon-trashcan': '&#xe80d;',
		'icon-bolt': '&#xe80e;',
		'icon-ampersand': '&#xe80f;',
		'icon-compass2': '&#xe810;',
		'icon-list3': '&#xe811;',
		'icon-grid': '&#xe812;',
		'icon-volume': '&#xe813;',
		'icon-volume2': '&#xe814;',
		'icon-stats2': '&#xe815;',
		'icon-target3': '&#xe816;',
		'icon-forward4': '&#xe817;',
		'icon-paperclip': '&#xe818;',
		'icon-keyboard2': '&#xe819;',
		'icon-crop2': '&#xe81a;',
		'icon-floppy': '&#xe81b;',
		'icon-filter3': '&#xe81c;',
		'icon-trophy2': '&#xe81d;',
		'icon-diary': '&#xe81e;',
		'icon-address-book2': '&#xe81f;',
		'icon-stop3': '&#xe820;',
		'icon-smiley3': '&#xe821;',
		'icon-shit': '&#xe822;',
		'icon-bookmark3': '&#xe823;',
		'icon-camera4': '&#xe824;',
		'icon-lamp': '&#xe825;',
		'icon-disk2': '&#xe826;',
		'icon-button': '&#xe827;',
		'icon-database': '&#xe828;',
		'icon-credit-card': '&#xe829;',
		'icon-atom': '&#xe82a;',
		'icon-winsows': '&#xe82b;',
		'icon-target4': '&#xe82c;',
		'icon-battery': '&#xe82d;',
		'icon-code2': '&#xe82e;',
		'icon-chat': '&#xe82f;',
		'icon-chat-alt-stroke': '&#xe830;',
		'icon-chat-alt-fill': '&#xe831;',
		'icon-comment-alt1-stroke': '&#xe832;',
		'icon-comment2': '&#xe833;',
		'icon-comment-stroke': '&#xe834;',
		'icon-comment-fill': '&#xe835;',
		'icon-comment-alt2-stroke': '&#xe836;',
		'icon-comment-alt2-fill': '&#xe837;',
		'icon-checkmark4': '&#xe838;',
		'icon-check-alt': '&#xe839;',
		'icon-x': '&#xe83a;',
		'icon-x-altx-alt': '&#xe83b;',
		'icon-denied': '&#xe83c;',
		'icon-cursor': '&#xe83d;',
		'icon-rss': '&#xe83e;',
		'icon-rss-alt': '&#xe83f;',
		'icon-wrench3': '&#xe840;',
		'icon-dial': '&#xe841;',
		'icon-cog4': '&#xe842;',
		'icon-calendar4': '&#xe843;',
		'icon-calendar-alt-stroke': '&#xe844;',
		'icon-calendar-alt-fill': '&#xe845;',
		'icon-share2': '&#xe846;',
		'icon-mail5': '&#xe847;',
		'icon-heart-stroke': '&#xe848;',
		'icon-heart-fill': '&#xe849;',
		'icon-movie': '&#xe84a;',
		'icon-document-alt-stroke': '&#xe84b;',
		'icon-document-alt-fill': '&#xe84c;',
		'icon-document-stroke': '&#xe84d;',
		'icon-document-fill': '&#xe84e;',
		'icon-plus3': '&#xe84f;',
		'icon-plus-alt': '&#xe850;',
		'icon-minus3': '&#xe851;',
		'icon-minus-alt': '&#xe852;',
		'icon-pin': '&#xe853;',
		'icon-link2': '&#xe854;',
		'icon-bolt2': '&#xe855;',
		'icon-move2': '&#xe856;',
		'icon-move-alt1': '&#xe857;',
		'icon-move-alt2': '&#xe858;',
		'icon-equalizer2': '&#xe859;',
		'icon-award-fill': '&#xe85a;',
		'icon-award-stroke': '&#xe85b;',
		'icon-magnifying-glass': '&#xe85c;',
		'icon-trash-stroke': '&#xe85d;',
		'icon-trash-fill': '&#xe85e;',
		'icon-beaker-alt': '&#xe85f;',
		'icon-beaker': '&#xe860;',
		'icon-key-stroke': '&#xe861;',
		'icon-key-fill': '&#xe862;',
		'icon-new-window': '&#xe863;',
		'icon-lightbulb': '&#xe864;',
		'icon-spin-alt': '&#xe865;',
		'icon-spin': '&#xe866;',
		'icon-curved-arrow': '&#xe867;',
		'icon-undo3': '&#xe868;',
		'icon-reload': '&#xe869;',
		'icon-reload-alt': '&#xe86a;',
		'icon-loop4': '&#xe86b;',
		'icon-loop-alt1': '&#xe86c;',
		'icon-loop-alt2': '&#xe86d;',
		'icon-loop-alt3': '&#xe86e;',
		'icon-loop-alt4': '&#xe86f;',
		'icon-transfer': '&#xe870;',
		'icon-move-vertical': '&#xe871;',
		'icon-move-vertical-alt1': '&#xe872;',
		'icon-move-vertical-alt2': '&#xe873;',
		'icon-move-horizontal': '&#xe874;',
		'icon-move-horizontal-alt1': '&#xe875;',
		'icon-move-horizontal-alt2': '&#xe876;',
		'icon-arrow-left4': '&#xe877;',
		'icon-arrow-left-alt1': '&#xe878;',
		'icon-arrow-left-alt2': '&#xe879;',
		'icon-arrow-right4': '&#xe87a;',
		'icon-arrow-right-alt1': '&#xe87b;',
		'icon-arrow-right-alt2': '&#xe87c;',
		'icon-arrow-up4': '&#xe87d;',
		'icon-arrow-up-alt1': '&#xe87e;',
		'icon-arrow-up-alt2': '&#xe87f;',
		'icon-arrow-down4': '&#xe880;',
		'icon-arrow-down-alt1': '&#xe881;',
		'icon-arrow-down-alt2': '&#xe882;',
		'icon-cd': '&#xe883;',
		'icon-steering-wheel': '&#xe884;',
		'icon-microphone': '&#xe885;',
		'icon-headphones3': '&#xe886;',
		'icon-volume3': '&#xe887;',
		'icon-volume-mute3': '&#xe888;',
		'icon-play5': '&#xe889;',
		'icon-pause4': '&#xe88a;',
		'icon-stop4': '&#xe88b;',
		'icon-eject2': '&#xe88c;',
		'icon-first2': '&#xe88d;',
		'icon-last2': '&#xe88e;',
		'icon-play-alt': '&#xe88f;',
		'icon-fullscreen-exit': '&#xe890;',
		'icon-fullscreen-exit-alt': '&#xe891;',
		'icon-fullscreen': '&#xe892;',
		'icon-fullscreen-alt': '&#xe893;',
		'icon-iphone': '&#xe894;',
		'icon-battery-empty': '&#xe895;',
		'icon-battery-half': '&#xe896;',
		'icon-battery-full': '&#xe897;',
		'icon-battery-charging': '&#xe898;',
		'icon-compass3': '&#xe899;',
		'icon-box': '&#xe89a;',
		'icon-folder-stroke': '&#xe89b;',
		'icon-folder-fill': '&#xe89c;',
		'icon-at': '&#xe89d;',
		'icon-ampersand2': '&#xe89e;',
		'icon-info4': '&#xe89f;',
		'icon-question-mark': '&#xe8a0;',
		'icon-pilcrow2': '&#xe8a1;',
		'icon-hash': '&#xe8a2;',
		'icon-left-quote': '&#xe8a3;',
		'icon-right-quote': '&#xe8a4;',
		'icon-left-quote-alt': '&#xe8a5;',
		'icon-right-quote-alt': '&#xe8a6;',
		'icon-article': '&#xe8a7;',
		'icon-read-more': '&#xe8a8;',
		'icon-list4': '&#xe8a9;',
		'icon-list-nested': '&#xe8aa;',
		'icon-book2': '&#xe8ab;',
		'icon-book-alt': '&#xe8ac;',
		'icon-book-alt2': '&#xe8ad;',
		'icon-pen2': '&#xe8ae;',
		'icon-pen-alt-stroke': '&#xe8af;',
		'icon-pen-alt-fill': '&#xe8b0;',
		'icon-pen-alt2': '&#xe8b1;',
		'icon-brush': '&#xe8b2;',
		'icon-brush-alt': '&#xe8b3;',
		'icon-eyedropper': '&#xe8b4;',
		'icon-layers-alt': '&#xe8b5;',
		'icon-layers': '&#xe8b6;',
		'icon-image3': '&#xe8b7;',
		'icon-camera5': '&#xe8b8;',
		'icon-aperture': '&#xe8b9;',
		'icon-aperture-alt': '&#xe8ba;',
		'icon-chart2': '&#xe8bb;',
		'icon-chart-alt': '&#xe8bc;',
		'icon-bars3': '&#xe8bd;',
		'icon-bars-alt': '&#xe8be;',
		'icon-eye4': '&#xe8bf;',
		'icon-user6': '&#xe8c0;',
		'icon-home5': '&#xe8c1;',
		'icon-clock4': '&#xe8c2;',
		'icon-lock-stroke': '&#xe8c3;',
		'icon-lock-fill': '&#xe8c4;',
		'icon-unlock-stroke': '&#xe8c5;',
		'icon-unlock-fill': '&#xe8c6;',
		'icon-tag-stroke': '&#xe8c7;',
		'icon-tag-fill': '&#xe8c8;',
		'icon-sun-stroke': '&#xe8c9;',
		'icon-sun-fill': '&#xe8ca;',
		'icon-moon-stroke': '&#xe8cb;',
		'icon-moon-fill': '&#xe8cc;',
		'icon-cloud3': '&#xe8cd;',
		'icon-rain': '&#xe8ce;',
		'icon-umbrella': '&#xe8cf;',
		'icon-star6': '&#xe8d0;',
		'icon-map-pin-stroke': '&#xe8d1;',
		'icon-map-pin-fill': '&#xe8d2;',
		'icon-map-pin-alt': '&#xe8d3;',
		'icon-target5': '&#xe8d4;',
		'icon-download4': '&#xe8d5;',
		'icon-upload4': '&#xe8d6;',
		'icon-cloud-download2': '&#xe8d7;',
		'icon-cloud-upload2': '&#xe8d8;',
		'icon-fork': '&#xe8d9;',
		'icon-paperclip2': '&#xe8da;',
		'icon-heart4': '&#xe8db;',
		'icon-cloud4': '&#xe8dc;',
		'icon-star7': '&#xe8dd;',
		'icon-tv2': '&#xe8de;',
		'icon-sound': '&#xe8df;',
		'icon-video': '&#xe8e0;',
		'icon-trash': '&#xe8e1;',
		'icon-user7': '&#xe8e2;',
		'icon-key4': '&#xe8e3;',
		'icon-search3': '&#xe8e4;',
		'icon-settings2': '&#xe8e5;',
		'icon-camera6': '&#xe8e6;',
		'icon-tag3': '&#xe8e7;',
		'icon-lock3': '&#xe8e8;',
		'icon-bulb': '&#xe8e9;',
		'icon-pen3': '&#xe8ea;',
		'icon-diamond': '&#xe8eb;',
		'icon-display': '&#xe8ec;',
		'icon-location5': '&#xe8ed;',
		'icon-eye5': '&#xe8ee;',
		'icon-bubble3': '&#xe8ef;',
		'icon-stack2': '&#xe8f0;',
		'icon-cup': '&#xe8f1;',
		'icon-phone3': '&#xe8f2;',
		'icon-news': '&#xe8f3;',
		'icon-mail6': '&#xe8f4;',
		'icon-like': '&#xe8f5;',
		'icon-photo': '&#xe8f6;',
		'icon-note': '&#xe8f7;',
		'icon-clock5': '&#xe8f8;',
		'icon-paperplane': '&#xe8f9;',
		'icon-params': '&#xe8fa;',
		'icon-banknote': '&#xe8fb;',
		'icon-data': '&#xe8fc;',
		'icon-music3': '&#xe8fd;',
		'icon-megaphone': '&#xe8fe;',
		'icon-study': '&#xe8ff;',
		'icon-lab2': '&#xe900;',
		'icon-food2': '&#xe901;',
		'icon-t-shirt': '&#xe902;',
		'icon-fire2': '&#xe903;',
		'icon-clip': '&#xe904;',
		'icon-shop': '&#xe905;',
		'icon-calendar5': '&#xe906;',
		'icon-wallet': '&#xe907;',
		'icon-vynil': '&#xe908;',
		'icon-truck2': '&#xe909;',
		'icon-world': '&#xe90a;',
		'icon-facebook4': '&#xe90b;',
		'icon-twitter-old': '&#xe90c;',
		'icon-share3': '&#xe90d;',
		'icon-feed6': '&#xe90e;',
		'icon-bird': '&#xe90f;',
		'icon-chat2': '&#xe910;',
		'icon-envelope2': '&#xe911;',
		'icon-envelope3': '&#xe912;',
		'icon-phone4': '&#xe913;',
		'icon-phone5': '&#xe914;',
		'icon-phone6': '&#xe915;',
		'icon-mobile4': '&#xe916;',
		'icon-ipod2': '&#xe917;',
		'icon-monitor2': '&#xe918;',
		'icon-laptop2': '&#xe919;',
		'icon-modem': '&#xe91a;',
		'icon-speaker': '&#xe91b;',
		'icon-window2': '&#xe91c;',
		'icon-server': '&#xe91d;',
		'icon-hdd': '&#xe91e;',
		'icon-keyboard3': '&#xe91f;',
		'icon-mouse2': '&#xe920;',
		'icon-cd2': '&#xe921;',
		'icon-floppy2': '&#xe922;',
		'icon-hardware': '&#xe923;',
		'icon-usb': '&#xe924;',
		'icon-cord': '&#xe925;',
		'icon-socket': '&#xe926;',
		'icon-socket2': '&#xe927;',
		'icon-socket3': '&#xe928;',
		'icon-printer': '&#xe929;',
		'icon-camera7': '&#xe92a;',
		'icon-pictures': '&#xe92b;',
		'icon-eye6': '&#xe92c;',
		'icon-uniE92D': '&#xe92d;',
		'icon-film3': '&#xe92e;',
		'icon-camera8': '&#xe92f;',
		'icon-movie2': '&#xe930;',
		'icon-tv3': '&#xe931;',
		'icon-camera9': '&#xe932;',
		'icon-camera10': '&#xe933;',
		'icon-volume4': '&#xe934;',
		'icon-music4': '&#xe935;',
		'icon-microphone2': '&#xe936;',
		'icon-radio': '&#xe937;',
		'icon-ipod3': '&#xe938;',
		'icon-headphone': '&#xe939;',
		'icon-cassette': '&#xe93a;',
		'icon-broadcast': '&#xe93b;',
		'icon-broadcast2': '&#xe93c;',
		'icon-calculator': '&#xe93d;',
		'icon-gamepad': '&#xe93e;',
		'icon-gamepad2': '&#xe93f;',
		'icon-cog5': '&#xe940;',
		'icon-shield2': '&#xe941;',
		'icon-skull': '&#xe942;',
		'icon-bug3': '&#xe943;',
		'icon-mine': '&#xe944;',
		'icon-earth3': '&#xe945;',
		'icon-globe2': '&#xe946;',
		'icon-planet': '&#xe947;',
		'icon-battery2': '&#xe948;',
		'icon-battery-low': '&#xe949;',
		'icon-battery3': '&#xe94a;',
		'icon-battery-full2': '&#xe94b;',
		'icon-folder3': '&#xe94c;',
		'icon-search4': '&#xe94d;',
		'icon-zoom-out2': '&#xe94e;',
		'icon-zoom-in2': '&#xe94f;',
		'icon-binocular': '&#xe950;',
		'icon-location6': '&#xe951;',
		'icon-pin2': '&#xe952;',
		'icon-file6': '&#xe953;',
		'icon-tag4': '&#xe954;',
		'icon-quote': '&#xe955;',
		'icon-attachment2': '&#xe956;',
		'icon-bookmark4': '&#xe957;',
		'icon-bookmark5': '&#xe958;',
		'icon-newspaper2': '&#xe959;',
		'icon-notebook2': '&#xe95a;',
		'icon-address-book3': '&#xe95b;',
		'icon-clipboard': '&#xe95c;',
		'icon-clipboard2': '&#xe95d;',
		'icon-board': '&#xe95e;',
		'icon-pencil4': '&#xe95f;',
		'icon-pen4': '&#xe960;',
		'icon-user8': '&#xe961;',
		'icon-user9': '&#xe962;',
		'icon-user10': '&#xe963;',
		'icon-trashcan2': '&#xe964;',
		'icon-cart5': '&#xe965;',
		'icon-bag': '&#xe966;',
		'icon-suitcase': '&#xe967;',
		'icon-card': '&#xe968;',
		'icon-book3': '&#xe969;',
		'icon-gift3': '&#xe96a;',
		'icon-lamp2': '&#xe96b;',
		'icon-settings3': '&#xe96c;',
		'icon-support2': '&#xe96d;',
		'icon-medicine': '&#xe96e;',
		'icon-cone2': '&#xe96f;',
		'icon-locked2': '&#xe970;',
		'icon-unlocked2': '&#xe971;',
		'icon-key5': '&#xe972;',
		'icon-info5': '&#xe973;',
		'icon-clock6': '&#xe974;',
		'icon-timer': '&#xe975;',
		'icon-food3': '&#xe976;',
		'icon-drink': '&#xe977;',
		'icon-mug2': '&#xe978;',
		'icon-cup2': '&#xe979;',
		'icon-drink2': '&#xe97a;',
		'icon-mug3': '&#xe97b;',
		'icon-lollipop': '&#xe97c;',
		'icon-lab3': '&#xe97d;',
		'icon-puzzle': '&#xe97e;',
		'icon-flag3': '&#xe97f;',
		'icon-star8': '&#xe980;',
		'icon-heart5': '&#xe981;',
		'icon-badge': '&#xe982;',
		'icon-cup3': '&#xe983;',
		'icon-scissors2': '&#xe984;',
		'icon-snowflake': '&#xe985;',
		'icon-cloud5': '&#xe986;',
		'icon-lightning2': '&#xe987;',
		'icon-night': '&#xe988;',
		'icon-sunny': '&#xe989;',
		'icon-droplet3': '&#xe98a;',
		'icon-umbrella2': '&#xe98b;',
		'icon-truck3': '&#xe98c;',
		'icon-car': '&#xe98d;',
		'icon-gas-pump': '&#xe98e;',
		'icon-factory': '&#xe98f;',
		'icon-tree2': '&#xe990;',
		'icon-leaf2': '&#xe991;',
		'icon-flower': '&#xe992;',
		'icon-direction': '&#xe993;',
		'icon-thumbs-up4': '&#xe994;',
		'icon-thumbs-down2': '&#xe995;',
		'icon-pointer2': '&#xe996;',
		'icon-pointer3': '&#xe997;',
		'icon-pointer4': '&#xe998;',
		'icon-pointer5': '&#xe999;',
		'icon-arrow-up5': '&#xe99a;',
		'icon-arrow-down5': '&#xe99b;',
		'icon-arrow-left5': '&#xe99c;',
		'icon-arrow-right5': '&#xe99d;',
		'icon-arrow-top-right': '&#xe99e;',
		'icon-arrow-top-left': '&#xe99f;',
		'icon-arrow-bottom-right': '&#xe9a0;',
		'icon-arrow-bottom-left': '&#xe9a1;',
		'icon-contract3': '&#xe9a2;',
		'icon-enlarge': '&#xe9a3;',
		'icon-refresh2': '&#xe9a4;',
		'icon-type2': '&#xe9a5;',
		'icon-box2': '&#xe9a6;',
		'icon-archive': '&#xe9a7;',
		'icon-envelope4': '&#xe9a8;',
		'icon-email': '&#xe9a9;',
		'icon-files': '&#xe9aa;',
		'icon-uniE9AB': '&#xe9ab;',
		'icon-file-settings': '&#xe9ac;',
		'icon-file-add': '&#xe9ad;',
		'icon-file7': '&#xe9ae;',
		'icon-align-left': '&#xe9af;',
		'icon-align-right': '&#xe9b0;',
		'icon-align-center': '&#xe9b1;',
		'icon-align-justify': '&#xe9b2;',
		'icon-file-broken': '&#xe9b3;',
		'icon-browser': '&#xe9b4;',
		'icon-windows2': '&#xe9b5;',
		'icon-window3': '&#xe9b6;',
		'icon-folder4': '&#xe9b7;',
		'icon-folder-add': '&#xe9b8;',
		'icon-folder-settings': '&#xe9b9;',
		'icon-folder-check': '&#xe9ba;',
		'icon-wifi-low': '&#xe9bb;',
		'icon-wifi-mid': '&#xe9bc;',
		'icon-wifi-full': '&#xe9bd;',
		'icon-connection-empty': '&#xe9be;',
		'icon-connection-25': '&#xe9bf;',
		'icon-connection-50': '&#xe9c0;',
		'icon-connection-75': '&#xe9c1;',
		'icon-connection-full': '&#xe9c2;',
		'icon-list5': '&#xe9c3;',
		'icon-grid2': '&#xe9c4;',
		'icon-uniE9C5': '&#xe9c5;',
		'icon-battery-charging2': '&#xe9c6;',
		'icon-battery-empty2': '&#xe9c7;',
		'icon-battery-25': '&#xe9c8;',
		'icon-battery-50': '&#xe9c9;',
		'icon-battery-75': '&#xe9ca;',
		'icon-battery-full3': '&#xe9cb;',
		'icon-settings4': '&#xe9cc;',
		'icon-arrow-left6': '&#xe9cd;',
		'icon-arrow-up6': '&#xe9ce;',
		'icon-arrow-down6': '&#xe9cf;',
		'icon-arrow-right6': '&#xe9d0;',
		'icon-reload2': '&#xe9d1;',
		'icon-refresh3': '&#xe9d2;',
		'icon-volume5': '&#xe9d3;',
		'icon-volume-increase2': '&#xe9d4;',
		'icon-volume-decrease2': '&#xe9d5;',
		'icon-mute': '&#xe9d6;',
		'icon-microphone3': '&#xe9d7;',
		'icon-microphone-off': '&#xe9d8;',
		'icon-book4': '&#xe9d9;',
		'icon-checkmark5': '&#xe9da;',
		'icon-checkbox-checked2': '&#xe9db;',
		'icon-checkbox': '&#xe9dc;',
		'icon-paperclip3': '&#xe9dd;',
		'icon-download5': '&#xe9de;',
		'icon-tag5': '&#xe9df;',
		'icon-trashcan3': '&#xe9e0;',
		'icon-search5': '&#xe9e1;',
		'icon-zoom-in3': '&#xe9e2;',
		'icon-zoom-out3': '&#xe9e3;',
		'icon-chat3': '&#xe9e4;',
		'icon-chat-1': '&#xe9e5;',
		'icon-chat-2': '&#xe9e6;',
		'icon-chat-3': '&#xe9e7;',
		'icon-comment3': '&#xe9e8;',
		'icon-calendar6': '&#xe9e9;',
		'icon-bookmark6': '&#xe9ea;',
		'icon-email2': '&#xe9eb;',
		'icon-heart6': '&#xe9ec;',
		'icon-enter2': '&#xe9ed;',
		'icon-cloud6': '&#xe9ee;',
		'icon-book5': '&#xe9ef;',
		'icon-star9': '&#xe9f0;',
		'icon-clock7': '&#xe9f1;',
		'icon-printer2': '&#xe9f2;',
		'icon-home6': '&#xe9f3;',
		'icon-flag4': '&#xe9f4;',
		'icon-meter3': '&#xe9f5;',
		'icon-switch3': '&#xe9f6;',
		'icon-forbidden': '&#xe9f7;',
		'icon-lock4': '&#xe9f8;',
		'icon-unlocked3': '&#xe9f9;',
		'icon-unlocked4': '&#xe9fa;',
		'icon-users3': '&#xe9fb;',
		'icon-user11': '&#xe9fc;',
		'icon-users4': '&#xe9fd;',
		'icon-user12': '&#xe9fe;',
		'icon-bullhorn2': '&#xe9ff;',
		'icon-share4': '&#xea00;',
		'icon-screen2': '&#xea01;',
		'icon-phone7': '&#xea02;',
		'icon-phone-portrait': '&#xea03;',
		'icon-phone-landscape': '&#xea04;',
		'icon-tablet2': '&#xea05;',
		'icon-tablet-landscape': '&#xea06;',
		'icon-laptop3': '&#xea07;',
		'icon-camera11': '&#xea08;',
		'icon-microwave-oven': '&#xea09;',
		'icon-credit-cards': '&#xea0a;',
		'icon-calculator2': '&#xea0b;',
		'icon-bag2': '&#xea0c;',
		'icon-diamond2': '&#xea0d;',
		'icon-drink3': '&#xea0e;',
		'icon-shorts': '&#xea0f;',
		'icon-vcard': '&#xea10;',
		'icon-sun': '&#xea11;',
		'icon-bill': '&#xea12;',
		'icon-coffee2': '&#xea13;',
		'icon-uniEA14': '&#xea14;',
		'icon-newspaper3': '&#xea15;',
		'icon-stack3': '&#xea16;',
		'icon-map-marker': '&#xea17;',
		'icon-map3': '&#xea18;',
		'icon-support3': '&#xea19;',
		'icon-uniEA1A': '&#xea1a;',
		'icon-barbell': '&#xea1b;',
		'icon-stopwatch2': '&#xea1c;',
		'icon-atom2': '&#xea1d;',
		'icon-syringe': '&#xea1e;',
		'icon-health': '&#xea1f;',
		'icon-bolt3': '&#xea20;',
		'icon-pill': '&#xea21;',
		'icon-bones': '&#xea22;',
		'icon-lab4': '&#xea23;',
		'icon-clipboard3': '&#xea24;',
		'icon-mug4': '&#xea25;',
		'icon-bucket': '&#xea26;',
		'icon-select': '&#xea27;',
		'icon-graph': '&#xea28;',
		'icon-crop3': '&#xea29;',
		'icon-image4': '&#xea2a;',
		'icon-cube': '&#xea2b;',
		'icon-bars4': '&#xea2c;',
		'icon-chart3': '&#xea2d;',
		'icon-pencil5': '&#xea2e;',
		'icon-measure': '&#xea2f;',
		'icon-eyedropper2': '&#xea30;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
