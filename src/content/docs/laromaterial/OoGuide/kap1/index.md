---
title: "Kapitel 1 - Objekt i objekt"
description: Kapitel 1 - Objekt i objekt med innehållsförteckning
head:
  - tag: style
    content: | # tar bort sidebaren och gör content bredare. För att jag vill ha ToC i index-sidan. Vilket inte går att få med template splash
      nav.sidebar { display: none; }
      .main-frame { margin-inline-start: 0 !important; padding-inline-start: 0 !important; }
      :root { --sl-content-width: 73rem; }
      @media (min-width: 72rem) {
        .main-pane {
          width: 100%;};}
      @media (min-width: 50rem) {
        nav {
          inset-inline-start: 0px;};}
---

import { LinkCard, CardGrid } from '@astrojs/starlight/components';

Vi ska titta på hur vi använder objekt i objekt, statiska metoder och överlagring. Ibland vill vi bestämma hur en klass ska använda en operator, till exempel `+`, och det kallas operatorsöverlagring. Vi ska också titta på privat och publikt och försöka gömma så mycket som möjligt inuti klassen.


## Innehåll

- [Information hiding](/laromaterial/ooguide/kap1/information_hiding_1)
- [Statiska metoder](/laromaterial/ooguide/kap1/statiska_metoder)
- [Metodöverlagring](/laromaterial/ooguide/kap1/metodoverlagring)
- [Operatorsöverlagring](/laromaterial/ooguide/kap1/operatoroverlagring)
- [Objekt i objekt](/laromaterial/ooguide/kap1/objekt_i_objekt)
- [Racet](/laromaterial/ooguide/kap1/race)

<LinkCard
  title="Tillbaka till - OO Guiden"
  href="/laromaterial/ooguide/"
/>
