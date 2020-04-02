/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cb14b8e4d311651ae1f3814a8a62a643"],["/about/index.html","f80d82ac25945b2faf2a269c0711cfc1"],["/about/renxi/default.css","288678e73f00c6cb95c23cd3364c07ac"],["/about/renxi/functions.js","b55ebd3a051e5e2febbc4c6e6b38c881"],["/about/renxi/jquery.min.js","ddb84c1587287b2df08966081ef063bf"],["/about/renxi/jscex-async-powerpack.min.js","7e924e9d70d4d80e4725f5515951e061"],["/about/renxi/jscex-async.min.js","9356c25ecd32cc3f0a0e29c8cef9ef4b"],["/about/renxi/jscex-builderbase.min.js","dcf649dc9d23245ad7638b2503f66967"],["/about/renxi/jscex-jit.js","3208836a590b3d25931e1459a382b399"],["/about/renxi/jscex-parser.js","91e339449d88e1f528cd54c25eac2076"],["/about/renxi/jscex.min.js","01ca8b33264bb363778dbe64b78a5de1"],["/about/renxi/love.js","df657037e0c09afc62158ef17ea8ddbe"],["/archives/2019/10/index.html","52f1bef19885f2d2f4507f955874d033"],["/archives/2019/11/index.html","3c5aa0e1bddc486ff4acd16cde0cc06c"],["/archives/2019/11/page/2/index.html","5b34a7112d2dc6785dab22ed91a99285"],["/archives/2019/12/index.html","888cb2efdfaf73d5dca80e9bbc434470"],["/archives/2019/index.html","eb14a6931091cecfc1e000b2c8009746"],["/archives/2019/page/2/index.html","e5bc6d7b2e9e84806db5a648d3450df7"],["/archives/2019/page/3/index.html","747d4925f3679adfe314c3e5bbd40bce"],["/archives/2020/01/index.html","2ca01a24f9e97f0c56f76fdf400fb7f9"],["/archives/2020/02/index.html","b20882e9bf5af317339e952b0d57d9d1"],["/archives/2020/03/index.html","8581cb3a5947e35c84efc17ee1f8cc08"],["/archives/2020/04/index.html","1397329064dd3c328c1577d93e5c336a"],["/archives/2020/index.html","2b47fedfc876f5f1adc0046d959e2593"],["/archives/index.html","6c9c981073e27dbb3e9e8b780c501001"],["/archives/page/2/index.html","2b5145cae4922543fe5748cac0f575b9"],["/archives/page/3/index.html","64443cd1de28f2867465a317ad4dea6d"],["/archives/page/4/index.html","c050f059cfba9de75aaa37a49843d5bd"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/books/index.html","c5aee66b363254674cf3cc6ebc8183e5"],["/categories/BUG/index.html","08a4cf3a492654c3aec4eca2ff3d5444"],["/categories/Hexo/Hexo订阅/index.html","d604c83cce7f65b4360be292daf35cb2"],["/categories/Hexo/index.html","7e8a306355eb89bb1a7716e5650523c5"],["/categories/Hexo/page/2/index.html","2328cf879d2994395557fe60ba2e7b2a"],["/categories/Hexo/点击特效/index.html","7a3c4cc3b74980728028964bc46f614a"],["/categories/Hexo/豆瓣/index.html","b44e974551014c679914cd76b19b5817"],["/categories/Java/Base64/index.html","023b1653ba90825cc67c2abfca68b3f0"],["/categories/Java/MD5/index.html","0be9632f41fe856ee2a3684abccaa7ce"],["/categories/Java/SpringBoot/index.html","0dc5da09a6c330ef83a22d142f05f314"],["/categories/Java/index.html","55a3df416de6ec34805d1485a79be739"],["/categories/Nginx/index.html","cf0aab867f1b692a55cd0b7d082ca7c5"],["/categories/Valine/index.html","530a7537eb0fd2c872935df602df7cc1"],["/categories/Vue/Axios/index.html","e2f7a5c0cf1ab320c107124ef22d84de"],["/categories/Vue/Jwt/index.html","5709230a65f3a189520466b2f7a719d0"],["/categories/Vue/el-date-picker/index.html","9a808a410a1f8cfca1bf9f08370b7852"],["/categories/Vue/index.html","ae125f93d8a448b26aa43b6f8fb723b2"],["/categories/Vue/工具类/index.html","2758cf616751cb5c4ccc15e16f0dd0a5"],["/categories/index.html","b954bb0900379e7e9b7f9c7894500488"],["/categories/视频流/index.html","4abda08e2cf4e7cdcc72cf9ee9071ad1"],["/categories/视频流/nginx-http-flv-module/index.html","a1ab3c040ba7c6b8339054658010ec38"],["/crypto-js.js","aa94a3285d72d7309d0df04ad8681eea"],["/css/main.css","7ea5bf195e45b05c9f2b29eb9558c94d"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","df22d12114fb80b2222f7d434d72ab87"],["/games/index.html","14fadb05113bcb3a1ab1d55fa1f7b002"],["/images/1.png","d300759956d731e90e04f959e288e60c"],["/images/about-me.png","84e25b860b15b4e6445dd084dd66b0fd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","0f9d1eab57a231719647b9b20ed952d8"],["/images/alipay1.jpg","8a481b5ac284e0317430aac00fa93bf2"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","b9c876d71eafacbcf4c4fea10b40b9a2"],["/images/avatar1.jpg","a33bde6a14be53af32b287d20ae08d1a"],["/images/background.jpg","f19436a8c6e3952e4817a5f0bba895da"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","fe64479e9b528e19967df833f70ab2bb"],["/images/failure1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/favicon.png","fe64479e9b528e19967df833f70ab2bb"],["/images/favicon1.png","abf24d8d9aca53c731cf65313e31c66d"],["/images/favicon2.png","51a0c1d78f151f21dc801e1801f4e634"],["/images/hot.png","8ca1fafa6d0efddcac6eee69f823782b"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","e89a5f2703bf064fb45e0fabe3bc0742"],["/images/linkcard_bak.png","07b964e8f40192f2d2deba5eb2debeb3"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/loading2.gif","bf7144d1a40a6b6325fd8e28c635ba5e"],["/images/loading3.gif","9c600b5240b32b012956f55a42cdcaf5"],["/images/loading4.gif","7021bb23b8740efadb3c6a1620d12df0"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","31dfac462044cd4675f744ff5a940c5e"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","d4accaba47d6e791ce0cd6365735992f"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechatpay.jpg","7ab2f36042f39d4c5aa706674081f82a"],["/images/wechatpay1.jpg","5a41b036b8fc13813f2e774eefda3930"],["/images/xiaohutong.png","4480114c06d7e3e48727e397f97f9ad2"],["/images/搞怪.png","53848cbfd48d42e0943d671aab91cc7a"],["/index.html","db202622a2ecc5c9bd358b339b62e346"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","f0e2515543625a8e0be6acac6744740d"],["/js/src/Valine.min.js","50cfb6bff49d1dd5a5d94c0bddbbd17b"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","444f6da1a047ff5dc65736838cbdf459"],["/js/src/algolia-search.js","02d11637b4a8954eabf13bca85170a02"],["/js/src/bootstrap.js","a30db625d603f524a71eadc64ffc8259"],["/js/src/browserType.js","47ae48a3819212cef8195b3c94a8a131"],["/js/src/bubble.js","1938d64ac011148037b873ba43faf25a"],["/js/src/canvas-dance-time.js","47a20a166d0274d2e5b5b7a1d2215c67"],["/js/src/clipboard-use.js","1b57f45db17e32d8040da33296393547"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","9a95e2d0b4a8dd9c1527a3595565c038"],["/js/src/exturl.js","1fe0befe79f22ca3f004d2aed01e75e6"],["/js/src/hook-duoshuo.js","e5c241b759977d17593c685af2d86622"],["/js/src/js.cookie.js","e4455b44735a6d022fbb1ef71d794003"],["/js/src/linkcard.js","1f12b67452d55e9df2595ae8b0d1d4ee"],["/js/src/motion.js","9458eac0656d8060e0855f0c8328797c"],["/js/src/photoswipe-ui-default.min.js","7b48965113d21a98c97d65c0fbb11667"],["/js/src/photoswipe.min.js","cdae9fc321a7fbbbe2d022c444c1c713"],["/js/src/post-details.js","f6aba890ec9395508047f0d519c98771"],["/js/src/schemes/pisces.js","fd26a71f62359e58557a13fd8af351b1"],["/js/src/scroll-cookie.js","973153eadb8ae3e91aeb1e1e2fe4d401"],["/js/src/scrollspy.js","c9b82f5deb977c0ee7c71efc9e6ce3ad"],["/js/src/snow.js","ccd2895f925a71b9beb5b719873b0cbf"],["/js/src/utils.js","2cdb699c30399318515efb8feba96b89"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","60aaccfdb1c328ec908ddf5cb1dd778b"],["/lib/Han/dist/han.js","84696df72c89eb9515764552b6959c97"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","b92132eb870734d53999034e6c8203bf"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","dc117f56a428fbeeaf25c7397189da9b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","1422e8fbb8be3687abe4fca9da1f9791"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c8f165a07d0cd5563bd682e9444452a6"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","c137f83f6c71d60f5d557b1145d1e39d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","d94ca5ff8efa53bcd60783691766ec9b"],["/lib/fancybox/source/jquery.fancybox.css","26b9faaba6ff3b37c66def57147e6051"],["/lib/fancybox/source/jquery.fancybox.js","d1b608e3ebce1565018f62bc95aee51f"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7ef42b83b26c9e4ba4be469ed7517782"],["/lib/fastclick/lib/fastclick.js","fcffb06030c93d09f4da867e12fc1d71"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","ef226ac4df48f7abf3cfc8785e4743f3"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","a313974dadc01632f2320467e1ba5fc5"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2ced2014bc3eac78ea4f4b6e01876033"],["/lib/jquery_lazyload/README.html","f2de73182c553a6db250e5f5cd5eec75"],["/lib/jquery_lazyload/jquery.lazyload.js","b469ea1b6947b39ad91b26d0ba56c2f7"],["/lib/jquery_lazyload/jquery.scrollstop.js","1a38c6b5f216b4b1ca20c57951a9fced"],["/lib/needsharebutton/font-embedded.css","0b2e80895a748277229187617a4a2754"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","cd18bfa2a46e6d1d98e4f402afcb26f1"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","d54407130eb4562893147eb6b391ad52"],["/lib/velocity/velocity.js","6a799ea89cde7014c0d5d455077a8ea9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","2b9fb06f386f4ac508d672036f570351"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","3dac09b058b2d35eb00bc85edd9db6b8"],["/links/index.html","3a9cb53b64652350ac028f18f9bcddca"],["/live2d-widget/README.html","0b20bf246a7275b143ac978b4781e5cc"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","215684fac71b247256cb7b162a00e095"],["/live2d-widget/demo/demo1.html","658ef5429e5f007cfeb1c4f252dea046"],["/live2d-widget/demo/demo2.html","87df31a9c0f75b31ce6eb0cfe6c68a80"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","d41d8cd98f00b204e9800998ecf8427e"],["/live2d-widget/waifu.css","5caa12bccead9d1bd010e5dff902d1a4"],["/live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/love/all.min.css","bea09a17faaf2a0a0328b5d75b7fc302"],["/love/all.min.js","a1b116a51691c4d53ed423876890531d"],["/love/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/14915.jpg","ff3fa2df1dd12f0028a357e9126eab4b"],["/love/img/319280.jpg","91274e69667d03ee4d31be531d0d1d1e"],["/love/img/iali0.jpg","ff7385d91515dc9d3d22a3a9c961009a"],["/love/img/iali10.gif","d219a1c64bc80b7a2036b85fd1a161ed"],["/love/img/iali11.jpg","7e14dbb392f6a9e1b90baa8f8378a243"],["/love/img/iali12.jpg","5e93e604898c511c3283788273441395"],["/love/img/iali14.jpg","1a0cb49129428f5fcfd84845f8d0d961"],["/love/img/iali16.jpg","51b4c061e694f41caf1417f6c47913a1"],["/love/img/iali18.jpg","82a5fb12baf3aa2b4d762e6231e2639e"],["/love/img/iali19.jpg","9d956bdec0e36465b55f5fa8e04c83b1"],["/love/img/iali2.jpg","e5276051b72707b9d4467a393f235229"],["/love/img/iali20.jpg","72a400f267a30bd91176dd583cc72082"],["/love/img/iali21.jpg","54d72d167bd430668b85cfce4459ce48"],["/love/img/iali22.jpg","966728a1738b84a3571d6f1d8d18e018"],["/love/img/iali22_bg.jpg","ad7e4147f2be0118a52e28b72f2c834d"],["/love/img/iali24.jpg","7129791651088fd9d524cf6a1ed3d90f"],["/love/img/iali25.jpg","d1345211a16a6b73a69c750eebd388cb"],["/love/img/iali29.jpg","f439b32281e8e2ff606a9792dbac345b"],["/love/img/iali2_bg.jpg","5a302d6d5665da0798ea836dcbf458a9"],["/love/img/iali3.jpg","a3e577c61da233777b5eb61c23f7ae76"],["/love/img/iali30_1.jpg","1167b77cdcac33dcb19e88ab5b8a8d1c"],["/love/img/iali30_2.jpg","38ec31f2c9108fc2e7ced1b7924fc33e"],["/love/img/iali31.jpg","532fadec17ddf43798d818270292754a"],["/love/img/iali32.jpg","0d35f4ad111b7e71f9a7022b5225c62b"],["/love/img/iali35.jpg","6c3846d8c6456389f075e235fc862588"],["/love/img/iali37.jpg","dfe0b6de30523c8fea6ba1186ae6d03d"],["/love/img/iali4.jpg","2d2ae9cc25e7113c804de6513e9efc88"],["/love/img/iali40.jpg","d0475806cff50075612567c4e0f31268"],["/love/img/iali40_bg.jpg","151a4e743d4293e942c49fbb7311e4c8"],["/love/img/iali42.jpg","d150c98e667750e232b8359035a408b4"],["/love/img/iali44.jpg","5acf3c00bd1f6ae77a53dfdf37830669"],["/love/img/iali45.jpg","66651fa7b0198b66c5f9ffba6621f164"],["/love/img/iali45_bg.jpg","096a8a8fff67871baa86addbe3266a41"],["/love/img/iali46.jpg","b1855662888954855073bf8812ab8d9f"],["/love/img/iali49.jpg","ee9a9702f724d8a53f3c9cfa1a17268b"],["/love/img/iali5.jpg","c9b9515f1e4c6eeac5034f871898b509"],["/love/img/iali50_1.jpg","cdfebabe67eaf1440f429d16849972a0"],["/love/img/iali50_2.jpg","902f701d8315d0612c0e39a8b5dd9624"],["/love/img/iali51.jpg","249ee693461ea7c04c179cddcf42b3d1"],["/love/img/iali52.jpg","d607034750685f592e86f164ab5497e7"],["/love/img/iali53.jpg","2bd412f60bd32c597cb42c792b9b0e3b"],["/love/img/iali57.gif","23e5a1b65d4613bd002bb46d7f4896ff"],["/love/img/iali57.jpg","6ae2c6279ba33e7870ff343af3c18ab0"],["/love/img/iali58.jpg","e5791b3e42b6ae5b919fe38210ced188"],["/love/img/iali59.png","7787651800c6bf9b7981821c3688f6ce"],["/love/img/iali59_bg.jpg","ae16253f779ee99a6544e78390aec93c"],["/love/img/iali6.jpg","9db5085f7b0e06126e2306177f21e122"],["/love/img/iali60.jpg","a90c024df9c4c94b3dee8469dacca551"],["/love/img/iali62.jpg","74cfa796abfd40209b4568ae8d8d24e2"],["/love/img/iali63.jpg","e388906da346acaf3d737336c02833fc"],["/love/img/iali64.jpg","33c23fff497c3a0716fde15d3c35c1d8"],["/love/img/iali65.jpg","54a42b8adcb923538e6dec7c530ebc08"],["/love/img/iali66.jpg","0bf2d5fddd82fd242a61dc8e9dabec5e"],["/love/img/iali67.jpg","d2a81ffd7fd4dad99b7b6a01b8709b78"],["/love/img/iali68.jpg","d744406ec192e89e56c6927aaa152b5d"],["/love/img/iali69.jpg","48037300c2bfa7004c1d48a09ba9f12e"],["/love/img/iali71.jpg","ec5998020ee3915819f0f53436cb7ccc"],["/love/img/iali75.jpg","fbc4c2ac42cc7f22d0cf863fcbc30951"],["/love/img/iali75_bg.jpg","f95386597540b3f2135208fb3b0bc132"],["/love/img/iali76.gif","0fe5d4d5711aa76a4476fdb19e92bd9c"],["/love/img/iali76_bg.png","ecd38fce3192812aeb3239e3df30834b"],["/love/img/iali77.jpg","141a6f17e060d80da0147cecb00dce0b"],["/love/img/iali8.gif","8625351824d4259ac5aa9ca202320151"],["/love/img/iali8_bg.png","a1710cb26d94647e8a236ba62e45e491"],["/love/img/iali9.jpg","f6893b8a69037a653db5cc8ffb74c80a"],["/love/img/music.png","2dba7dfaafd6fec577bf372b85a25e7d"],["/love/img/mute.png","dafe486a576795d39683d6e96b2884f6"],["/love/index.html","94041ce35eecccae932a6f6392af3e37"],["/love/jquery.min.js","3576a6e73c9dccdbbc4a2cf8ff544ad7"],["/love/love.min.js","98a427c2573b4799164f02f870f83972"],["/mcommon.js","640fdfefdd4292415f6cd6e5e24eba9c"],["/movies/index.html","673e2a2db9e963f07d284810c6f4c730"],["/page/2/index.html","b6be5a06848c119b3a641128cd4bc32b"],["/page/3/index.html","dd0eca7594f0ec1cb82eb76037d448ad"],["/page/4/index.html","816f4272d57a97c60a0f79c896fde2ec"],["/photos/default-skin/default-skin.css","63b7d665a0ae71470ef493f2576d047f"],["/photos/default-skin/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/photos/default-skin/default-skin.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/photos/default-skin/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/photos/index.html","00c7a32ec3793e7659a2d3ccf9906d7f"],["/photos/ins.css","12fc3c90f191181c9a0c938aab11f001"],["/photos/ins.js","e776fe7daa9c602e6f385d3b3d229d39"],["/photos/photoswipe.css","ecff312941c4652d82b319d55b018aef"],["/posts/19c94341.html","266e8af2de135cd88408bf3f73fc0a85"],["/posts/27514.html","843e7dce2f8301758ff1eab42aa57b26"],["/posts/2b56997e.html","759743fc4bcbfb2e0561279c9e6d4a3e"],["/posts/358f95d9.html","8d504e4b60c5238ce31606770810765d"],["/posts/39d47c89.html","078cb8d2d6537199085b9127d722975a"],["/posts/3e5a3bb6.html","10ee40d39f3c70f561ca93a3749c9c76"],["/posts/4394a738.html","d56b94961a77b2863454a3ee71da0c2b"],["/posts/4598d3ed.html","b7ed2ef980d1ae81e8e8b88235ca4a42"],["/posts/495d0b23.html","05701ed84be9ed493d1c4b69e0e85a8c"],["/posts/5e773fb.html","cf3ceee0ab83a5078e94d72819998706"],["/posts/61913369.html","d077e707f3f9a1253a56ee82c1dc0cd0"],["/posts/69ab28bb.html","648d19baa54866f1a18f17dd9285c6a7"],["/posts/7fbe9500.html","8d3f8df0ead5fc2e32985dbe94b9ba37"],["/posts/89ea6c8b.html","438ab1ffdfad0826acebe31454face11"],["/posts/9c9b482b.html","56e4d6043d43280b73fd9331d73441cc"],["/posts/a63fb3ae.html","d44aee0bf0780a1cb1c09b170a363e5e"],["/posts/a7df3b40.html","3c2a44542a7c471992acc36e355096dc"],["/posts/ab21860c.html","b524e5d8baf6f64d821ef010dcb73e0b"],["/posts/b4831a5e.html","4555a9578486dacba5b54d4300628ef2"],["/posts/bf9eba42.html","b805412fdd58938f2eae6b90748f45ae"],["/posts/c1cdcf68.html","7872ba50aa9f4020007c5cbeabb68692"],["/posts/c4782247.html","d3423ea2427c5fb14d017307931d8788"],["/posts/c7631ec1.html","6de1f2f7ab0ef054cbe9d1c83167345d"],["/posts/c9b4cff2.html","2a38aa4dd9397d91024eb29fbcccece1"],["/posts/d7399e80.html","d39686c90b2966554482cbd69c14e903"],["/posts/dc877e7a.html","33ef50a2dee9aa23930332b8d3ca459d"],["/posts/dd9d9f86.html","2d35696837e5e1a460a26a59d0bc2af5"],["/posts/dff7e11c.html","4188400302ee76210d5058610e3211bf"],["/posts/e1b9c6c5.html","6aadde61294f79c3f70650fce4de6dd8"],["/posts/f68f129b.html","68d1e0a77bcd4bce77575c45d1db38cf"],["/posts/fc31ea3.html","ba3c5d860944725bbc9772f514adc3d2"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/sharejs/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/sw-register.js","c99b885d3adc5766e109b5c28e5baf0d"],["/tags/AOP/index.html","d2ac59c80fe72707c3d65b6ebe497cdc"],["/tags/Axios/index.html","270630c69e89d2420bedc58972c90876"],["/tags/BUG/index.html","05e55c66070d26a6ac11e2991a219e3e"],["/tags/Base64/index.html","e587f73752665b775d7542241aadd243"],["/tags/Coding/index.html","f4d6587da76e6f3d9e6726d1d08c1c8b"],["/tags/Github/index.html","44b7bdc70585ef14f32f152f32dbb19a"],["/tags/Gulp/index.html","f415f36b145ae934699a7b242e9f6a5f"],["/tags/Hexo/index.html","4f97136b4e95393edebac683e993680d"],["/tags/Hexo/page/2/index.html","5272143d190e33f8b861f594546f980b"],["/tags/Java/index.html","f039d2ed8e5ada6d5de331ea114d665b"],["/tags/Jwt/index.html","ef2a40a955ee5364e9d9394aecb285ff"],["/tags/MD5/index.html","2a604b543ffc42a0bc16954cbd424e1c"],["/tags/Neat/index.html","20929f4ffc16a2e951862fd3359d5076"],["/tags/Next/index.html","eec0a6ed67981b3df2c3681eb9ceaf6d"],["/tags/Nginx/index.html","42a6c0eeb9e4f09aaf51f49611a4e488"],["/tags/Password/index.html","72589ed84fce738a8256130cabf58bd5"],["/tags/Photos/index.html","3c4445b306fc1d9b307d8de2f9396ffa"],["/tags/Rss/index.html","363f6e8b2a1db5d022d3978ef7e21a19"],["/tags/SHA-1/index.html","bbbe9e2759f38d90d9d017dda8fb7dcb"],["/tags/Security/index.html","da4cc5af262170c231b44dc5b32aabaf"],["/tags/SpringBoot/index.html","3af2402e4b1fbcdae1f7c049a03d1bf9"],["/tags/SpringBoot打包/index.html","60da865b59a440e6d60743674fb72c6f"],["/tags/TravisCI/index.html","d465bef9fb1d58b52451b7dc45dbce1c"],["/tags/Valine/index.html","34b6e50888414419f80070d1eb0dc385"],["/tags/Vue/index.html","81f1e8c667276ad58a38da21a365235a"],["/tags/el-date-picker/index.html","8a153a225a392129d90825a9a18f9245"],["/tags/index.html","5416d3c1bbb2ce2562ce74781fa8d648"],["/tags/lazyload/index.html","1971e0a2043685687df25a1e70276780"],["/tags/nginx-http-flv-module/index.html","a4cb3069e8e4b2e93cf0d77a042e6d29"],["/tags/代码块/index.html","6548649cc5d2c607733d47ec3dee92c6"],["/tags/图片/index.html","355c42a77ab06c586c269087102a8c8f"],["/tags/工具类/index.html","82c04feee254d39f8e346bc994fc30ae"],["/tags/邮件订阅/index.html","b9f0f2493d932a92b386d6c441211d51"],["/top/index.html","28a1ebebc8bd3381b533250c12d479c0"]];
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
