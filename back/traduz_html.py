from bs4 import BeautifulSoup, NavigableString
from googletrans import Translator

# Carregar o HTML original
with open("../front/index.html", "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f, "html.parser")

translator = Translator()

# Tags que queremos evitar traduzir
IGNORAR_TAGS = ["script", "style", "link", "meta", "svg", "path"]

# Função para traduzir texto visível
def traduzir_elementos(soup):
    for elem in soup.find_all(string=True):
        if elem.parent.name not in IGNORAR_TAGS and elem.strip():
            try:
                traduzido = translator.translate(elem, src='pt', dest='en').text
                elem.replace_with(NavigableString(traduzido))
            except Exception as e:
                print(f"Erro ao traduzir '{elem}': {e}")

# Traduzir o conteúdo visível
traduzir_elementos(soup)

# Alterar o atributo lang para "en"
html_tag = soup.find("html")
if html_tag:
    html_tag["lang"] = "en"

# Salvar o HTML traduzido em um arquivo novo
with open("../front/index_en.html", "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Tradução concluída. Arquivo salvo como 'index_en.html'.")
