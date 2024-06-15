# Changelog

## [0.2.4](https://github.com/hbstack/header/compare/modules/git-org/v0.2.3...modules/git-org/v0.2.4) (2024-06-15)


### Performance Improvements ⚡️

* **hugopress:** include partials directly ([#614](https://github.com/hbstack/header/issues/614)) ([9465fb6](https://github.com/hbstack/header/commit/9465fb634f2711058b664659dccb9ce42ef3ad00))

## [0.2.3](https://github.com/hbstack/header/compare/modules/git-org/v0.2.2...modules/git-org/v0.2.3) (2024-03-25)


### Bug Fixes 🐞

* **git-org:** correct the humanize function for `m` unit. ([93fe92a](https://github.com/hbstack/header/commit/93fe92ad9e69d974e13b621a1e6422fd38045647))
* **git-org:** replace `getJSON` with `resources.getRemote`. ([93fe92a](https://github.com/hbstack/header/commit/93fe92ad9e69d974e13b621a1e6422fd38045647))
* **git-repo:** correct the humanize function for "m" unit. ([#564](https://github.com/hbstack/header/issues/564)) ([93fe92a](https://github.com/hbstack/header/commit/93fe92ad9e69d974e13b621a1e6422fd38045647))
* **git-repo:** replace `getJSON` with `resources.getRemote`. ([93fe92a](https://github.com/hbstack/header/commit/93fe92ad9e69d974e13b621a1e6422fd38045647))

## [0.2.2](https://github.com/hbstack/header/compare/modules/git-org/v0.2.1...modules/git-org/v0.2.2) (2024-02-01)


### Bug Fixes 🐞

* **git-org:** skip stars calculating when GITHUB_TOKEN is not set ([#474](https://github.com/hbstack/header/issues/474)) ([46c103e](https://github.com/hbstack/header/commit/46c103ef5bd02c72700b04037a99e9545ff1575f))

## [0.2.1](https://github.com/hbstack/header/compare/modules/git-org/v0.2.0...modules/git-org/v0.2.1) (2024-01-21)


### Performance Improvements ⚡️

* **git-org:** use GraphQL API for fetching stars count of multiple repos ([#463](https://github.com/hbstack/header/issues/463)) ([e660ef3](https://github.com/hbstack/header/commit/e660ef3a9d0dc204e32d6157130a6de31a39de7f))

## [0.2.0](https://github.com/hbstack/header/compare/modules/git-org/v0.1.1...modules/git-org/v0.2.0) (2024-01-01)


### Features ✨

* **git-org:** show the total stars ([f14e6f1](https://github.com/hbstack/header/commit/f14e6f11ac10942c39eeef99e5d073dc918577ee))


### Bug Fixes 🐞

* **git-org:** correct service conditions ([9dc1714](https://github.com/hbstack/header/commit/9dc1714b539e564e7169cb93ccc5a91871ec31d5))
* **git-org:** set Authorization header only if GITHUB_TOKEN env is set ([9ce9d3d](https://github.com/hbstack/header/commit/9ce9d3db0e18a3cc0fd56c5690a84d5c2e09445f))

## [0.1.1](https://github.com/hbstack/header/compare/modules/git-org/v0.1.0...modules/git-org/v0.1.1) (2024-01-01)


### Bug Fixes 🐞

* correct partial and warning messages typos ([2a41224](https://github.com/hbstack/header/commit/2a412244958a5822b4e5c838c2056cd002ca56b6))

## [0.1.0](https://github.com/hbstack/header/compare/modules/git-org-v0.0.1...modules/git-org/v0.1.0) (2024-01-01)


### Features ✨

* add the git org module ([#437](https://github.com/hbstack/header/issues/437)) ([5bac9f3](https://github.com/hbstack/header/commit/5bac9f331eaf0c6e888a507ba6de189efa36ac4e))
