analogicznie:
Dashboard.html ma źródło robocze (skrypty i style) w folderze dashsrc, oraz bundla w folderze dashbuild
index.html ma źródło robocze (skrypty i style) w folderze indexsrc, oraz bundla w folderze indexbuild

przy edycji
aby bundlować robocze skrypty i style dla dashboarda.html, należy w webpack.config. ustawić zapis:

entry: ['./dashsrc/bundle.js'],
  output: {
    path: path.resolve(__dirname, 'dashbuild/'),
    publicPath: 'dashbuild/',
    filename: 'dashboard.js',
  },
  
  zaś żeby bundlować pliki indexu.html, analgiczny zapis to:  
  
  entry: ['./indexsrc/main.js'],
  output: {
    path: path.resolve(__dirname, 'indexbuild/'),
    publicPath: 'indexbuild/',
    filename: 'indexboard.js',
  },

W źródle dashboarda (dashbuild) znajduje się plik stylów structure.css, który zawiera strukture
strony html (podział na lewą i prawą kolumnę). Całą stronę zamyka div.page-wrapper-top.