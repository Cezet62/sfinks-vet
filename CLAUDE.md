# Sfinks - Notatki projektu

## Linki
- **Strona:** https://weterynarz-osielsko-sfinks.vercel.app
- **GitHub:** https://github.com/Cezet62/sfinks-vet
- **Vercel Panel:** https://vercel.com/cezarys-projects-4a0e489c/weterynarz-osielsko-sfinks
- **Obecna strona kliniki:** https://www.sfinks.vet/

## Stack technologiczny
- React 19 + TypeScript + Vite
- Tailwind CSS (przez CDN)
- Gemini AI (backend proxy przez Vercel Serverless Functions)
- Hosting: Vercel (auto-deploy z GitHub)

## Struktura projektu
```
/api/diagnose.ts          - Backend proxy dla Gemini API
/components/              - Komponenty React
  AboutUs.tsx             - Sekcja "O nas"
  DiagnosticAssistant.tsx - Asystent AI
  Footer.tsx              - Stopka z danymi kontaktowymi
  Hero.tsx                - Sekcja główna
  Navbar.tsx              - Nawigacja
  Services.tsx            - Lista usług
/services/geminiService.ts - Serwis frontendowy (wywołuje /api/diagnose)
```

## Dane kliniki (prawdziwe)
- **Nazwa:** Gabinet Weterynaryjny "Sfinks"
- **Adres:** ul. Bałtycka 34, 86-031 Osielsko
- **Telefon:** 665-567-626
- **Email:** kontakt@sfinks.vet
- **Godziny:** Pon-Pt 9:00-18:00
- **Właścicielka:** lek. wet. Natalia Czerkas-Dobkowska
- **Działalność od:** 2011
- **Zespół:** 3 lekarzy + 2 asystentów
- **Specjalizacja:** dermatologia, alergologia, cytologia

## Konfiguracja
- Klucz `GEMINI_API_KEY` jest w Vercel Environment Variables (nie w kodzie!)
- Auto-deploy: każdy `git push` wdraża nową wersję
- Build: `npm run build` → folder `dist/`

## Wdrażanie
```bash
git add . && git commit -m "opis zmian" && git push
# Vercel automatycznie wdroży
```

Ręczne wdrożenie (bez GitHub):
```bash
npx vercel --prod
```

## Do zrobienia (przyszłość)
- [ ] Dodać prawdziwe zdjęcia (gabinet, właścicielka)
- [ ] Zastąpić placeholder opinii prawdziwymi
- [ ] Podpiąć domenę sfinks.vet (jeśli klient ma)
- [ ] Rozważyć system rezerwacji wizyt

## Historia zmian
- 2025-01-11: Utworzenie strony, wdrożenie na Vercel, integracja Gemini AI
