# 2Slim Blog

Сайт блога 2Slim на [Astro](https://astro.build). Статьи — markdown-файлы в `src/content/articles/`.

## Как публикуются статьи

Автоматизация в Make.com: агент "Blog Writer" готовит черновики в Google-таблице
"Оценка ASO для 2Slim" (вкладка **Blog Articles**), после ручного approve
агент "Blog Publisher" создаёт ветку, коммитит markdown-файл статьи и картинку,
открывает и мержит Pull Request. GitHub Actions (`.github/workflows/deploy.yml`)
автоматически собирает сайт и деплоит на GitHub Pages при каждом мердже в `main`.

## Локальная разработка

```bash
npm install
npm run dev
```

## Домен

`2slimapp.com` — DNS настроен на GitHub Pages (см. `public/CNAME`).
