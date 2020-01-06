/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2092db3eec241a0a86e6a9dd4ea9396a"],["/about/index.html","3d736e27bd5bfa20c23deec3370e0331"],["/about/renxi/default.css","00d40bd2a2c8da06ddc1756e43a3487f"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","7045aa3ae3bdb64dbd5fae92e17d3882"],["/archives/2019/11/index.html","070048e0d4b9f23e51729c79305cc4c7"],["/archives/2019/11/page/2/index.html","a5b7eecef81a347f1ef9d37f6651a1ae"],["/archives/2019/12/index.html","0f321e371c861d4e6ed2ecb6c2486095"],["/archives/2019/index.html","3d1eea32709d1f0ce6075f2c447bd644"],["/archives/2019/page/2/index.html","5bf89710448fd674bbb99973efca96dc"],["/archives/2019/page/3/index.html","6e61e2b886dfc16a08df436860e0d294"],["/archives/2020/01/index.html","6d0504d4f4aad577e5470b2adb2439ed"],["/archives/2020/index.html","7582a5bf5ef7f15186cc15d4451b54ff"],["/archives/index.html","369ee63c885231ede895fa2b6d7a5954"],["/archives/page/2/index.html","7d3dc32bf40e7dac9983c9d105837ace"],["/archives/page/3/index.html","4b481ea9cf04cd27d9ef411164a7e634"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","fceb149b0632e97908af081225dbb324"],["/categories/Hexo/index.html","d896fe8d6207dd81b62e4eb4ab1d8b85"],["/categories/Hexo/page/2/index.html","e8c5aa372ed33ddf1628ec9c4eaff9ad"],["/categories/Hexo/点击特效/index.html","37a3772d41f3dcf4be80b177da84f94e"],["/categories/Hexo/豆瓣/index.html","82803c25811c43cf30e8ca708bf9cae0"],["/categories/Hexo订阅/index.html","c6b07409ac90aa4ab9d4c90404b50568"],["/categories/Java/Base64/index.html","fc50eb07b2ff62f37d31f3b850befe21"],["/categories/Java/MD5/index.html","433002c90c1d8d8930fb771aa8883a89"],["/categories/Java/SpringBoot/index.html","3a479b5e1b9c2aba30437a488eba32cc"],["/categories/Java/index.html","fc7761fab6d5ec0021b49c8a20afce40"],["/categories/Valine/index.html","0f2ff6c5e1c4830bb000a2859ec971d5"],["/categories/Vue/Axios/index.html","42688242995d8c608011fdb85b64e874"],["/categories/Vue/el-date-picker/index.html","701fcdd2a188fad5eb2ad346a7a2d302"],["/categories/Vue/index.html","7b34f698ceba6a75a13170fe0688c42e"],["/categories/index.html","0ae9eb041a10ed890b00fa6f72e50ed0"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","cf41dde78cebb0340bb74a3319f033ef"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","5db295834d66853865cc9c8105876531"],["/games/index.html","d7b172b592ae7c64f4893ee159210758"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","7ac55adf8af8aaccf316c11e6e6271fd"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","64fe3eef504aef813d95fd01bcc0837f"],["/js/src/Valine.min.js","637c387ebdbb3bd638b5540155d0ef00"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","7820f13a7d9558f02b6d05e89cb42e44"],["/js/src/algolia-search.js","c25ac2c8ae4a9d746bfcb945ee112b16"],["/js/src/bootstrap.js","f733e75b03fd15f465701939c24abeb7"],["/js/src/browserType.js","73f7eb6a04785ae2ba724fa8e3aa4791"],["/js/src/bubble.js","51548a58c7a9e02c1f012b1e6b37ad7b"],["/js/src/canvas-dance-time.js","7cb06bd3332b81e9f73dff018e3ed961"],["/js/src/clipboard-use.js","c2a7c4c50d8378c701af5a63d19326ec"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","2c25774754c0b42361d0f66572cfa0f0"],["/js/src/exturl.js","0037ef363db1f8deb01bdb325152950b"],["/js/src/hook-duoshuo.js","1efa2f3272f7b7799943853067f3bcaf"],["/js/src/js.cookie.js","f44f907e220d01809cea029c5845b8e5"],["/js/src/linkcard.js","c9a443ee130751901daed68d6874dea4"],["/js/src/motion.js","c67ac3c1fb7dbede566101e7a3c2ffac"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f411ef0ec7f877f668207ab8abb073d9"],["/js/src/schemes/pisces.js","0d2ed70816062f99a1b207ecb8ebb171"],["/js/src/scroll-cookie.js","c851edd408607e94f6b1be944d1148c2"],["/js/src/scrollspy.js","f43c96b3103e6b4299631d7a9689ed65"],["/js/src/snow.js","d412dd097e4b766ee753cde423a8b886"],["/js/src/utils.js","97ed2a6702d2063953d2ae1a17c8d2b1"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","af07ac6de1efc9772053eecf1ee6f420"],["/lib/Han/dist/han.js","cd53028e0f85262bbdc647fc77692c6c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b8c33a58dd060e02e88b6887086899f5"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","a6168d7a916b8eecd1513c52ec6671fd"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a01429094b5b1e14eeb1d923a964db97"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","034cb54d8d69a21422de09461ab797e3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","65b248356162b4a34e668f3f5be0c2c0"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","c4a0e13420f7ede1825cde325ae0bc8e"],["/lib/fancybox/source/jquery.fancybox.css","5bfd97573246f2ca95e689a3e0aef217"],["/lib/fancybox/source/jquery.fancybox.js","16d6f69eac59dfed71304a8b56106d0d"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","18e968667891db7102b4f771efbb727a"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","99b27a7faf780c5106f15116217032cc"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","35ad7e2c0c590e51fe477ed2ebaf48ef"],["/lib/jquery_lazyload/jquery.scrollstop.js","15b5adcc0f9685a9eed1d344f5620010"],["/lib/needsharebutton/font-embedded.css","c9242063a4dbc6fe28bebefb55193efc"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","4617e82d49e56afcccc564741227d221"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","b5bf2cfbb21e5336266faed616530ca9"],["/lib/velocity/velocity.js","a01760eb450a51562f71600251e998c6"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","51e17fbf4421e579b5d9c27424bd920c"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","4ac6ce0b8fd77f766e6e638064a9128b"],["/links/index.html","3f50c59204ed53bd02224b3b62aa6563"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","0555c9f4effb11a8ff08c8dce2c9c18d"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","31b93bdcb1eb7631b376a7cd0bbb0aa5"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","437e9fa28ad82c59b607b55cdccb1888"],["/page/2/index.html","09531271046bb1c7ef745f8abb50e5a9"],["/page/3/index.html","2750946079bd1ad1eae17ebc0377e445"],["/photos/default-skin/default-skin.css","0a6a52784cf18e436c5214ad83f4c69c"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","2b888ff1a471f85ffab343b312ccec51"],["/photos/ins.css","378d77b9766a3803631c9d3508af6c1e"],["/photos/ins.js","7de63ee4ae9d11e7983caf649a08c015"],["/photos/photoswipe.css","7a9a39cecc0c1482ad5709eab50656fa"],["/posts/19c94341.html","0c29e35e8a520f545af9f88a8acc71bf"],["/posts/27514.html","659bbe81bce26dc5fc77ef10143f8b90"],["/posts/39d47c89.html","0a3083722d3f7a31c14709996d8159f7"],["/posts/3e5a3bb6.html","c3206fb4784648aa8bb14d68f8fc9e90"],["/posts/4394a738.html","3bc547568755e0d82883014344a0effe"],["/posts/495d0b23.html","d08272fe01e823bf58756d3e4c43fc09"],["/posts/61913369.html","01579dbeb83f272508f6824e5367488b"],["/posts/69ab28bb.html","b5f9e7e2126f49cb8400af8390b8fd90"],["/posts/7fbe9500.html","23d23d06e858cf1e349d8875156706bd"],["/posts/89ea6c8b.html","164d8498ed58d752af4340cff9d5a2d8"],["/posts/9c9b482b.html","f05a978f412548dbc60815eb4b801e7f"],["/posts/a7df3b40.html","a6a3cb615f4021410ca82af419709b11"],["/posts/ab21860c.html","6a099e96beb800d1755444bdf149f2d6"],["/posts/b4831a5e.html","b0f18b59809f718997f2107ab121df8c"],["/posts/bf9eba42.html","eb6c5c1891e474ae438991b7084789be"],["/posts/c1cdcf68.html","b852bcc80317bc23fdb134ad9393d6e3"],["/posts/c4782247.html","5292831f529a647172bcd62d5d65c72a"],["/posts/c7631ec1.html","97b37cb5f614d073e34a9ead72ffe110"],["/posts/d7399e80.html","a317c10a101b2e5c1ff78a20cca528d6"],["/posts/dd9d9f86.html","40bb290261888d4639a74e91f92b49ed"],["/posts/dff7e11c.html","352ee385e7070a4f4d60c4c490e6c962"],["/posts/e1b9c6c5.html","f0cd7558a3af0aeeb60430a16faf7d6a"],["/posts/f68f129b.html","d83eecc6f56ac090432ffb993bedd16d"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","1e63df5d00319d5622942e6ff1840c03"],["/tags/Axios/index.html","9f47f1fd100e74cb563fcc4190b15767"],["/tags/Base64/index.html","e3ac3beafe9f354e49612307b0e7d0dd"],["/tags/Coding/index.html","b1cc0fbcedc379a7eba06063ab4a5d81"],["/tags/Github/index.html","0fe4e8c30ca6cf45d071b319abbd4a52"],["/tags/Gulp/index.html","2a90f9eaa623c59089c3869491f71959"],["/tags/Hexo/index.html","ef86198ae39b891b8255fd1ce47ff2f1"],["/tags/Hexo/page/2/index.html","2aea4ff3599fe2da4a3bc5c7cd8607ae"],["/tags/Java/index.html","a0353d18d1b39e7efb2617442a764459"],["/tags/MD5/index.html","386713a58da4aa7f1234570e43730644"],["/tags/Neat/index.html","2cf82c28ebc83f99f4f13e1882923575"],["/tags/Next/index.html","d1ba9e1e78f9b11fbcb549a93638f486"],["/tags/Password/index.html","a22bd36d46ee9a139c822c1dfe552bda"],["/tags/Photos/index.html","7b7756f3ec64d20ea86783d5d4713685"],["/tags/Rss/index.html","7ae77484e10927ca45b00944d07a47ca"],["/tags/SHA-1/index.html","d8bef6fe74d2fcb57afe024f72607c7c"],["/tags/Security/index.html","da1786096eb717eb7e2bb013b9a83dbf"],["/tags/SpringBoot打包/index.html","77283f5927728054c1d9f7361feedd46"],["/tags/TravisCI/index.html","b8d249a1aa7054b3c0dff423c11b0b6e"],["/tags/Valine/index.html","6d04d65514b3c3eca24719e01b36ec9b"],["/tags/Vue/index.html","c332d4f3132c19d68adcc6b4fb900b79"],["/tags/el-date-picker/index.html","61f178ad1f26639ff0e6aa2c86e1dd5e"],["/tags/index.html","7ab1f4dccbc436d089ec255965faf9c8"],["/tags/lazyload/index.html","e0824ffd49823d60b8fd29ef69ace1c4"],["/tags/代码块/index.html","a92a531b69ba0662e24325439493c4d5"],["/tags/图片/index.html","0929bf80e0dac700bedb35860fec36c9"],["/tags/邮件订阅/index.html","fb5cc3006f7650d877f746110b845f88"],["/top/index.html","371ae739df8139f84daa6fbde0ad4d76"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
