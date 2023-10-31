# Changelog

## [0.12.1](https://github.com/hbstack/header/compare/v0.12.0...v0.12.1) (2023-10-31)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.3.0 ([11bad38](https://github.com/hbstack/header/commit/11bad38eaa74b09b147b2e78f4f37e3a72ab0f22))

## [0.12.0](https://github.com/hbstack/header/compare/v0.11.3...v0.12.0) (2023-10-12)


### Features ✨

* add the gcse module ([49d2ad1](https://github.com/hbstack/header/commit/49d2ad16701e6c77fa6e6ded179ac9c292a456aa))

## [0.11.3](https://github.com/hbstack/header/compare/v0.11.2...v0.11.3) (2023-10-10)


### Bug Fixes 🐞

* correct the active parent menu when it's URL is empty ([4d6cfe5](https://github.com/hbstack/header/commit/4d6cfe57d802bb1a87aff6eca5b3bc813d626eb8))

## [0.11.2](https://github.com/hbstack/header/compare/v0.11.1...v0.11.2) (2023-10-10)


### Bug Fixes 🐞

* active the parent menu if it's children are active ([#321](https://github.com/hbstack/header/issues/321)) ([165f665](https://github.com/hbstack/header/commit/165f66514afbe1fe72964646f5c60ceed67da272))

## [0.11.1](https://github.com/hbstack/header/compare/v0.11.0...v0.11.1) (2023-10-04)


### Bug Fixes 🐞

* add the data-columns to PurgeCSS safelist ([6616c22](https://github.com/hbstack/header/commit/6616c22ff8cdd1583efc302cb75f171d48678684))

## [0.11.0](https://github.com/hbstack/header/compare/v0.10.1...v0.11.0) (2023-10-04)


### Features ✨

* add the columns parameter for dropdown menus, up to 2 ([#313](https://github.com/hbstack/header/issues/313)) ([14b9cf4](https://github.com/hbstack/header/commit/14b9cf463a83da0a47aaa65cd95dc495931596f8))
* use the page description for dropdown menu if set ([#312](https://github.com/hbstack/header/issues/312)) ([e487abd](https://github.com/hbstack/header/commit/e487abd036f0534033615562081b8ab6b6f3815d))

## [0.10.1](https://github.com/hbstack/header/compare/v0.10.0...v0.10.1) (2023-09-30)


### Styles 🎨

* dropdown menu header takes full width ([#301](https://github.com/hbstack/header/issues/301)) ([1c12319](https://github.com/hbstack/header/commit/1c123193a1a0ad74a3cb984eedbc7dc35ea89e4d)), closes [#299](https://github.com/hbstack/header/issues/299)
* dropdown menu takes full width when there is only one menu ([#302](https://github.com/hbstack/header/issues/302)) ([473d3cb](https://github.com/hbstack/header/commit/473d3cbfd2106be0a8c6ab5eed421e0ed862acf6)), closes [#300](https://github.com/hbstack/header/issues/300)

## [0.10.0](https://github.com/hbstack/header/compare/v0.9.0...v0.10.0) (2023-09-24)


### Continuous Integration

* **deps:** update module github.com/hugomods/icons/vendors/bootstrap to v0.5.1 ([210dcf3](https://github.com/hbstack/header/commit/210dcf39d54f62c7d327ecf547882001a79710d0))


### Features ✨

* show two columns on dropdown menus on large screens ([#294](https://github.com/hbstack/header/issues/294)) ([a3c2ffc](https://github.com/hbstack/header/commit/a3c2ffcaa25434c4fa5644a2311ab0db55ee3d06)), closes [#293](https://github.com/hbstack/header/issues/293)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.2.0 ([5416a23](https://github.com/hbstack/header/commit/5416a230994fe73e2e5047d8aac9f397d6dbb33a))
* **deps:** update dependency stylelint-scss to v5.2.1 ([8850c8c](https://github.com/hbstack/header/commit/8850c8cac8760cffa5bbb2e47e832286c154ca2d))

## [0.9.0](https://github.com/hbstack/header/compare/v0.8.2...v0.9.0) (2023-09-02)


### Features ✨

* add the breakpoint parameter that used for collapsing/expanding ([#262](https://github.com/hbstack/header/issues/262)) ([1fb877b](https://github.com/hbstack/header/commit/1fb877b070bd2d2ed5896ccfc454838266f4e15c))


### Bug Fixes 🐞

* calculate scroll-padding-top with top-offset CSS var ([52952f9](https://github.com/hbstack/header/commit/52952f9c38f93df26309cd3cb91eafdd29550cc2))

## [0.8.2](https://github.com/hbstack/header/compare/v0.8.1...v0.8.2) (2023-08-29)


### Bug Fixes 🐞

* increase the top-offset when sticky ([762d9c2](https://github.com/hbstack/header/commit/762d9c2534410ffe4dc308ae63def3f68f1b1ffa))

## [0.8.1](https://github.com/hbstack/header/compare/v0.8.0...v0.8.1) (2023-08-25)


### Bug Fixes 🐞

* correct the margin-bottom with hb-top-offset CSS var ([7c222cb](https://github.com/hbstack/header/commit/7c222cb30cb2b104af00e8ee5f502d398c9dfcdb))

## [0.8.0](https://github.com/hbstack/header/compare/v0.7.1...v0.8.0) (2023-08-25)


### Continuous Integration

* **deps:** update module github.com/hbstack/hb to v0.6.0 ([c6796be](https://github.com/hbstack/header/commit/c6796be42bc4df943792e6307a4214b628082d57))


### Features ✨

* add the hb-header-nav-before and hb-header-nav-after hooks ([#229](https://github.com/hbstack/header/issues/229)) ([05a7136](https://github.com/hbstack/header/commit/05a7136c795560c8f10145f052fa1d014b174ee9))


### Bug Fixes 🐞

* adjust the hb-top-offset on initializing and resizing ([#230](https://github.com/hbstack/header/issues/230)) ([8612e32](https://github.com/hbstack/header/commit/8612e32d9f5a55bcb0626d2c507dbefb6bbfa732))

## [0.7.1](https://github.com/hbstack/header/compare/v0.7.0...v0.7.1) (2023-08-20)


### Bug Fixes 🐞

* initialize the scrolling class ([a969b55](https://github.com/hbstack/header/commit/a969b55f12c5a65150b6c0129964c6166af04476))

## [0.7.0](https://github.com/hbstack/header/compare/v0.6.0...v0.7.0) (2023-08-20)


### Features ✨

* append the scrolling class to .hb-header on scrolling ([#211](https://github.com/hbstack/header/issues/211)) ([8c18eff](https://github.com/hbstack/header/commit/8c18eff447c99bc05fdb627c4915a6a2a899fb5a))

## [0.6.0](https://github.com/hbstack/header/compare/v0.5.0...v0.6.0) (2023-08-17)


### Features ✨

* add the banner module ([#198](https://github.com/hbstack/header/issues/198)) ([798963a](https://github.com/hbstack/header/commit/798963ac79d2e02d42c8ab1984e6c664fa49b631))

## [0.5.0](https://github.com/hbstack/header/compare/v0.4.4...v0.5.0) (2023-08-17)


### Features ✨

* add the hb-header attributes, hb-header-begin and hb-header-end hooks ([#197](https://github.com/hbstack/header/issues/197)) ([72aebcc](https://github.com/hbstack/header/commit/72aebcc6e34120eae4cfadf36ec59f9f8899b20e))


### Styles 🎨

* replace sticky-top with fixed-top on header menus. ([72aebcc](https://github.com/hbstack/header/commit/72aebcc6e34120eae4cfadf36ec59f9f8899b20e))

## [0.4.4](https://github.com/hbstack/header/compare/v0.4.3...v0.4.4) (2023-08-11)


### Continuous Integration

* **deps:** update module github.com/hbstack/hb to v0.5.2 ([d8c0d4b](https://github.com/hbstack/header/commit/d8c0d4b5c012f3db0dee9c660e2037456cf04481))


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.1.0 ([14496ee](https://github.com/hbstack/header/commit/14496ee9f04e142fdb7aab95188826bee53daeaa))

## [0.4.3](https://github.com/hbstack/header/compare/v0.4.2...v0.4.3) (2023-08-04)


### Bug Fixes 🐞

* avoid generating invalid style if the logo background is not set ([#158](https://github.com/hbstack/header/issues/158)) ([3662f8c](https://github.com/hbstack/header/commit/3662f8c30338f27fbf2464e04c14b7745d0d7920))


### Styles 🎨

* show the shadow only when scrolling ([#162](https://github.com/hbstack/header/issues/162)) ([b87bc7d](https://github.com/hbstack/header/commit/b87bc7dadc57ca1c8c49451f17d47dedfbde583f))

## [0.4.1](https://github.com/hbstack/header/compare/v0.4.0...v0.4.1) (2023-07-21)


### Performance Improvements ⚡️

* caching partials ([#146](https://github.com/hbstack/header/issues/146)) ([339f9ac](https://github.com/hbstack/header/commit/339f9ac839cd09ef2148422f3e81ddc3544cf32d))

## [0.4.0](https://github.com/hbstack/header/compare/v0.3.0...v0.4.0) (2023-07-18)


### Styles 🎨

* change submenu icon size as 2em ([b659f78](https://github.com/hbstack/header/commit/b659f78c752953f0b7db83689d1b434ead574dbc))
* do not apply max-width on xxl screen ([c75a1cb](https://github.com/hbstack/header/commit/c75a1cbd5e7c7323d20523a2e290b019150b4c80))


### Features ✨

* add the classic theme module ([727a413](https://github.com/hbstack/header/commit/727a413c8e974b45207b17e08d40d6194aec0743))
* add the pills theme ([#127](https://github.com/hbstack/header/issues/127)) ([21851d7](https://github.com/hbstack/header/commit/21851d7a103438c9aaa7444b39ea45c7a18f62e4))
* **menus:** add the alignment to align the dropdown menus to start or end ([b57b3f0](https://github.com/hbstack/header/commit/b57b3f0912b22851e2f07be400519c47248ec981))

## [0.3.0](https://github.com/hbstack/header/compare/v0.2.0...v0.3.0) (2023-07-10)


### Styles 🎨

* show the full description of dropdown menus ([#114](https://github.com/hbstack/header/issues/114)) ([24b70a5](https://github.com/hbstack/header/commit/24b70a5295cee6260d90c7b7d638e3bc1a4b5b6e))


### Features ✨

* add the target and rel parameters ([#115](https://github.com/hbstack/header/issues/115)) ([60242da](https://github.com/hbstack/header/commit/60242daafe203bdfe3cbbca64dc6628ec7ca3257))

## [0.2.0](https://github.com/hbstack/header/compare/v0.1.17...v0.2.0) (2023-07-06)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v5.0.1 ([26adb46](https://github.com/hbstack/header/commit/26adb464a7b95faee72b8a550636dd6c002cdff8))


### Features ✨

* add the brand_url for customizing brand URL ([c1572fd](https://github.com/hbstack/header/commit/c1572fdc678fe202238c210b2f12efddd49faac6))
