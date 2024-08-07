# Uniforms

## Temel kurallar

[kutuphane-adı] = tüm kütüphane adları uf- ön takısı ile başlamalı ve kebab-case yazım tarzıyla isimlandirilmeli
[component-adı] = tüm componentler uf- ön takısı ile başlamalı ve kebab-case yazım tarzıyla isimlandirilmeli

## Projeye yeni bir kütüphane eklenmesi - backend - api

nx g @nx-dotnet/core:library --name=[kutuphane-adı] --language=C# --directory=[dizin] --template=classlib --testTemplate=xunit --pathScheme=nx

Örnek: kütüphane kullanıcı girişi yönetimi için yapılacaksa,
[kutuphane-adı] = uf-auth-api
[dizin] = auth
nx g @nx-dotnet/core:library --name=uf-auth-api --language=C# --directory=auth --template=classlib --testTemplate=xunit --pathScheme=nx

! projeye yeni api kütüphanesi eklendiğinde ana projeye referans olarak eklenmelidir. Aşağıdaki commit incelenerek benzer değişiklik yapılabilir

- 7772becd597a686345d0805cd713c351a601a5e4 - ornek auth controller olusturuldu. kutuphane ana projye linklendi

## Projeye yeni bir kütüphane eklenmesi - frontend - web

!Onemli: web tarafında dizin ismi verilirken ana libs dizini de isme eklenmelidir ve kutuphane adı dizin yolunun sonuna eklenmelidir.

nx g @nx/angular:library --name=[kutuphane-adı] --directory=[dizin]/[kutuphane-adı] --addTailwind=true --buildable=true --projectNameAndRootFormat=as-provided

Örnek: kütüphane kullanıcı girişi yönetimi için yapılacaksa,
[kutuphane-adı] = uf-auth-web
[dizin] = libs/auth
nx g @nx/angular:library --name=uf-auth-web --directory=libs/auth/uf-auth-web --addTailwind=true --buildable=true --projectNameAndRootFormat=as-provided

## Frontend projesine yeni bir component eklenmesi

cd [proje-dizini] && nx g @nx/angular:component --name=[component-adı] --directory=src/lib/[component-adı] --export=true --nameAndDirectoryFormat=as-provided --style=scss --prefix=uf

Örnek:
cd libs/shared/uf-web-components && nx g @nx/angular:component --name=uf-button --directory=src/lib/uf-button --export=true --nameAndDirectoryFormat=as-provided --style=scss --prefix=uf

! component adında ve prefix te uf yer aldığı için component oluştuktan sonra [component-adı].component.ts dosyasından fazladan olan prefix temizlenmeli

- selector: 'uf-uf-button', => selector: 'uf-button',
