#!/bin/bash
# Retry failed checks + add more premium candidates
candidates=(
  "https://droga5.com"
  "https://bff.co"
  "https://cemtrexlabs.com"
  "https://akinsparker.com"
  "https://www.leeroy.ca"
  "https://www.interodigital.com"
  "https://engagemassive.com"
  "https://www.mediamonks.com"
  "https://www.wearecollins.com"
  "https://www.instrument.com"
  "https://www.basicagency.com"
  "https://www.loyalkaspar.com"
  "https://www.jam3.com"
  "https://www.activetheory.net"
  "https://www.ddbb.com"
  "https://www.frogdesign.com"
  "https://www.ideo.com"
  "https://www.akqa.com"
  "https://www.smithandharvelle.com"
  "https://www.silo.cc"
  "https://lustre.ai"
  "https://www.characterinc.com"
)
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
for url in "${candidates[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 15 -A "$UA" -H "Accept: text/html,application/xhtml+xml" -H "Accept-Language: en-US,en;q=0.9" "$url" 2>/dev/null)
  echo "$code  $url"
done
