var badeplasser = [
    [59.12, 11.39, "Roanlegg - haldens roklub"],
    [59.12, 11.39, "Roanlegg - haldens roklub"],
    [59.12, 11.39, "Roanlegg - haldens roklub"],
    [59.12, 11.39, "Haldens roklubb - flytebrygge"],
    [59.45, 10.66, "Rosnes roanlegg - klubb- og båthus"],
    [59.45, 10.66, "Rosnes roanlegg"],
    [59.45, 10.66, "Rosnes roanlegg - flytebrygge"],
    [59.43, 10.64, "Moss Seilforening - seilanlegg"],
    [59.44, 10.68, "Kajakklubb - båthall"],
    [59.44, 10.68, "Kajakklubb - brygge for vannsport"],
    [59.29, 11.08, "Sarpsborg roklubb - roanlegg"],
    [59.29, 11.08, "Sarpsborg roklubb - båthus"],
    [59.29, 11.08, "Sarpsborg roklubb - flytebrygge"],
    [59.15, 11.19, "Sarpsborg seilforening - seilanlegg"],
    [59.15, 11.19, "Sarpsborg seilforening, flytebrygge"],
    [59.21, 10.80, "Fredrikstad seilsportanlegg"],
    [59.21, 10.80, "Fr.stad seilforening, brygge"],
    [59.35, 10.92, "Borgebunnen roanlegg"],
    [59.52, 10.68, "Son seilarena"],
    [59.69, 10.75, "Årungen roarena"],
    [59.69, 10.75, "Årungen padleanlegg"],
    [59.69, 10.75, "Årungen båthus"],
    [59.68, 10.62, "Drøbaksund seilarena - Brygge"],
    [59.68, 10.62, "Drøbaksund seilarena - Jollebod"],
    [59.68, 10.62, "Husvikholmen Seilsportanlegg"],
    [59.82, 10.61, "Steilene seilsenter"],
    [59.87, 10.66, "Varg i.l. flytebrygge"],
    [59.75, 10.58, "Søndre Spro Brygge"],
    [59.76, 10.83, "Tussetjern flytebrygge"],
    [59.81, 10.80, "Kolbotnvannet  flytebrygge"],
    [59.88, 10.61, "Vestfjorden Seilsportarena"],
    [59.87, 10.62, "Vestfjorden seilsportarena - Ytre Vassholmen brygge"],
    [59.89, 10.58, "Sarbuvollen Seilsportarena"],
    [59.89, 10.58, "Sarbuvollen seilsportarena - sjøbod"],
    [59.89, 10.59, "Strand Kajakk Klubb - Koksabukta kajakkanlegg"],
    [59.89, 10.59, "Strand Kajakk Klubb - båthus"],
    [59.89, 10.54, "Bærum kajakkanlegg"],
    [59.89, 10.54, "Bærum Roklubb flytebrygge"],
    [59.81, 10.36, "Asker Helsesportlags senter - flytebrygg"],
    [59.81, 10.36, "Asker Helsesportlags senter - flytebrygge"],
    [59.82, 10.48, "Blakstadtangen - bryggebod"],
    [59.82, 10.48, "Blakstadtangen Optimistgarasje"],
    [59.85, 10.49, "Solheim Kajakkanlegg"],
    [59.85, 10.49, "Solheim kajakkanlegg flytebrygge"],
    [59.85, 10.49, "Solheim kajakkanlegg"],
    [59.82, 10.48, "Feilregistrert"],
    [59.86, 11.22, "Gansvika bade- og rekreasjonso"],
    [59.72, 11.06, "Mjær vannskiarena"],
    [59.99, 11.15, "Stampetjern badeplass"],
    [60.15, 11.47, "Vannskianlegg"],
    [60.41, 11.12, "Vålsjøen kanobrygge"],
    [60.49, 10.94, "Høversjøen badeplass"],
    [59.97, 10.73, "Norges idrettshøgskole roanlegg"],
    [59.91, 10.70, "Norske studenters roklubb, båthus"],
    [59.91, 10.70, "Norske studenters roklubb, brygge"],
    [59.87, 10.76, "Ormsund roklubbs båthus"],
    [59.87, 10.76, "Ormsund roklubbs brygge"],
    [59.87, 10.76, "Ormsund roklubbs robane"],
    [59.92, 10.66, "Oslo kvinnelige roklubbs båthu"],
    [59.92, 10.66, "Oslo kvinnelige roklubbs brygg"],
    [59.92, 10.68, "Oslo roklubbs båthus"],
    [59.92, 10.68, "Oslo roklubbs brygge"],
    [59.88, 10.76, "Ormøya kajakkstativer"],
    [59.91, 10.70, "Christiania roklubbs båthus"],
    [59.91, 10.70, "Christiania roklubbs brygge"],
    [59.90, 10.73, "Arbeidernes roklubbs båthus"],
    [59.90, 10.73, "Arbeidernes roklubbs brygge"],
    [59.98, 10.62, "Christiania roklubb bogstad båthus"],
    [59.98, 10.62, "Christiania roklubb bogstad"],
    [59.98, 10.62, "Christiania roklubbs bogstad brygge"],
    [59.87, 10.86, "Nøklevann ro - og padleklubb"],
    [59.88, 10.77, "Bundefjorden seilforen.s havn"],
    [59.88, 10.77, "Malmøya robane"],
    [59.87, 10.76, "Bundefjorden Seilsenter båthus"],
    [59.96, 10.67, "Holmenkollen vannskianlegg"],
    [59.92, 10.69, "Nord kajakk-klubbs havn"],
    [59.90, 10.69, "Lille herbern båthavn"],
    [59.90, 10.70, "Lille Herbern båthavn, regattakontor"],
    [59.92, 10.67, "Bestumkilen kajakklager"],
    [59.92, 10.67, "Oslo kajakk-klubbs havn"],
    [59.92, 10.69, "Kongelig norsk seilforening - flytebrygge"],
    [59.91, 10.66, "KNS Seilsportsenter - båthus"],
    [59.92, 10.67, "Oslo kajakklubb, klubb- og båthus"],
    [59.92, 10.66, "Oslo kajakklubb, flytebrygge"],
    [59.92, 10.73, "Sollerudstranda kajakklager"],
    [59.88, 10.76, "Ormsundkaia båtutsettingsbrygge"],
    [59.92, 10.67, "Sjølyst kajakklager"],
    [59.97, 10.63, "Bogstadvannet Robane"],
    [59.90, 10.75, "Sørenga friluftssenter, båthus for kajakker"],
    [59.90, 10.75, "Sørenga friluftssenter, brygge for kajakker"],
    [60.19, 12.04, "Vingersjøen rostadion, båthus"],
    [60.19, 12.04, "Vingersjøen rostadion, roanlegg"],
    [60.19, 12.04, "Vingersjøen rostadion, flytebrygge"],
    [60.19, 12.04, "Vingersjøen rostadion, flytebrygge 2"],
    [60.79, 11.08, "Tjuvholmen båthus"],
    [60.79, 11.07, "Tjuvholmen seilbrygge"],
    [60.87, 10.90, "Kvarbergsvika, båthus"],
    [60.87, 10.90, "Kvarbergsvika, flytebrygge"],
    [60.91, 10.71, "Moelv vannski anlegg"],
    [60.91, 10.71, "Moelv vannski anlegg"],
    [60.91, 10.71, "Moelv vannski anlegg"],
    [60.28, 11.78, "Dølisjøen vannskianlegg"],
    [60.28, 11.78, "Dølisjøen vannskianlegg"],
    [60.28, 11.78, "Dølisjøen vannskianlegg"],
    [60.26, 11.70, "Sør-Odal idretts- aktivitetspark: Vannskianlegg - Sjø 1"],
    [60.26, 11.70, "Sør-Odal Idretts- og aktivitetspark: Vannsportanlegg - Sjø 2"],
    [60.50, 11.80, "Noggarn helsesenter"],
    [58.98, 10.70, "Gjøvik Kajakklubbs båthus"],
    [61.88, 8.35, "Åstraelva (rafting)"],
    [61.71, 9.44, "Sjoa elvesportsanlegg"],
    [61.75, 9.30, "NWR raftinganlegg"],
    [61.75, 9.31, "Heidal rafting"],
    [61.75, 9.30, "Flåteferie raftingselskap"],
    [61.75, 9.30, "Flåte-opplevelser"],
    [61.67, 10.10, "Spidsbergseter kanoutleie"],
    [61.65, 10.11, "Venabu kanoutleie"],
    [60.24, 16.37, "Randsfjorden Seilforening Båthus"],
    [61.03, 9.06, "Bryggjenøbbe vannsportanlegg"],
    [61.09, 8.98, "Båtplass/flytebrygge"],
    [61.09, 8.98, "Båtplass/flytebrygge"],
    [59.71, 10.27, "Solumstrand seilbåthavn"],
    [59.75, 10.19, "Roklubbhuset"],
    [59.74, 10.20, "Roklubbhuset, båthus"],
    [59.74, 10.20, "Roklubbhuset, flytebrygge"],
    [59.67, 9.65, "Nybrufossen Kongsbergbølga"],
    [60.07, 10.31, "Sunvollen friområde, båthus"],
    [60.07, 10.31, "Sundvolen friområde, brygge"],
    [59.90, 10.30, "Svangstrand kajakknaust"],
    [59.76, 10.50, "Røyken seilforenings seilsportanlegg"],
    [59.76, 10.50, "Nærsnes båtbrygge for Røyken seilforening"],
    [59.68, 10.53, "Hurum seilsenter, flytebrygge"],
    [59.53, 10.41, "Rødtangen jollebrygge"],
    [59.42, 10.49, "Horten Roklubb Båthus"],
    [59.42, 10.49, "Horten Roklubb Båthus"],
    [59.40, 10.48, "Rørestrand seileranlegg"],
    [59.40, 10.48, "Rørestrand seileranlegg, jolleslipp"],
    [59.35, 10.47, "Åsgårdstrand seileranlegg"],
    [59.35, 10.47, "Åsgårdstrand Seileranlegg Kran"],
    [59.35, 10.47, "Åsgårdstrand Seileranlegg, faste brygger "],
    [59.35, 10.47, "Åsgårdstrand seileranlegg, flytebrygger"],
    [59.40, 10.48, "Rørestrand Flytebrygge"],
    [59.49, 10.32, "Holmestrand Roklubb Båthus"],
    [59.26, 10.42, "Tønsberg roklubb Båthus"],
    [59.26, 10.42, "Tønsberg roklubb - idrettshus/båthus"],
    [59.27, 10.40, "Tønsberg kajak klubb Flytebrygge"],
    [59.09, 10.22, "Granholmen Båthus"],
    [59.09, 10.22, "Granholmen Flytebrygge"],
    [59.09, 10.22, "Granholmen brygge/oppstillingsanlegg"],
    [59.13, 10.32, "Knattholmen Båthavn"],
    [59.23, 9.97, "Korvikvannet"],
    [59.23, 9.97, "Korvikvannet vannsportanlegg - brygge og stupetårn"],
    [59.02, 10.10, "Ødegården - Flytebrygger"],
    [59.06, 10.02, "Soffan Farrisvannet"],
    [59.63, 10.41, "Svelvik kajakklubb Lagerrom"],
    [59.59, 10.41, "Bokerøya seilanlegg"],
    [59.22, 10.46, "Fjærholmen seilsenter - seilanlegg"],
    [59.21, 10.45, "Knarberg båthavn båthus"],
    [59.22, 10.46, "Fjærholmen - Bryggeanlegg"],
    [59.07, 9.72, "Seivall småbåthavn"],
    [59.07, 9.72, "Seivall Båthus"],
    [59.07, 9.72, "Seivall jollerampe"],
    [59.07, 9.71, "Seivall småbåthavn, brygge 2"],
    [59.13, 9.64, "Porsgrunn roklubb roanlegg"],
    [59.13, 9.64, "Porsgrunn roklubb båthus"],
    [59.13, 9.64, "Porsgrunn Roklubb roanlegg brygger"],
    [59.17, 9.72, "Jarseng idrettsanlegg - flytebrygge"],
    [59.19, 9.49, "Hanesbukta"],
    [59.20, 9.60, "Bakkestranda - flytebrygge"],
    [59.40, 8.49, "Kviteseid brygge flytebrygge for funksjo"],
    [58.73, 9.23, "Finnøya seilsenter - bryggeanlegg"],
    [58.73, 9.23, "Krana (mudderbua)"],
    [58.73, 9.23, "Sagjordet sjøsportanlegg med handikappbrygge"],
    [58.33, 8.58, "Groos seilsenter"],
    [58.33, 8.58, "Groos Seilsenter - Bryggeanlegg"],
    [58.33, 8.58, "Groos seilsenter - jollebu"],
    [58.45, 8.75, "Arendal ro- og kajakksenter Ormevika - roanlegg"],
    [58.45, 8.75, "Arendal ro- og kajakksenter Ormvika - båthus"],
    [58.45, 8.75, "Ormvika"],
    [58.45, 8.75, "Arendal ro- og  kajakksenter - bryggeanlegg"],
    [58.45, 14.75, "Arendal ro- og kajakksenter Ormevika - båthall"],
    [58.45, 14.75, "Arendal ro- og kajakksenter Ormevika - rehab bygg"],
    [58.43, 8.79, "Arendal seilforening"],
    [58.43, 8.79, "Arendal seilforening"],
    [58.43, 8.79, "Arendal seilforening"],
    [58.43, 14.79, "Arendal Seilforening - Seilerhytta - brygge"],
    [58.46, 8.78, "Arendal båtsportanlegg"],
    [58.49, 8.66, "Roanlegg Longumvann"],
    [58.45, 14.61, "Furrebanen wakeboardanlegg "],
    [58.62, 9.10, "Askerøy"],
    [58.62, 8.94, "Tvedestrandfjorden"],
    [58.68, 8.99, "Songe båtsportanlegg"],
    [58.51, 8.63, "Songeelva padleanlegg"],
    [58.77, 8.47, "Gjermones padleanlegg"],
    [59.21, 7.53, "Valle motell"],
    [59.23, 7.53, "Honnevje badeplass"],
    [58.18, 8.03, "Gill kajakkanlegg"],
    [58.19, 8.08, "Hamresanden brettseilingsanlegg"],
    [58.15, 8.00, "Elvebredden båthus"],
    [58.14, 8.04, "Kjeltringholmen Bryggeanlegg"],
    [58.03, 7.47, "Endresens løkke"],
    [58.02, 7.46, "Kvisla båthus"],
    [58.03, 7.42, "Hisåsen båthus"],
    [58.04, 7.44, "Ulvegjelet båthus"],
    [58.03, 7.41, "Hisåsen"],
    [58.03, 7.43, "Vestnes båthus"],
    [58.03, 7.43, "Vestnes båthus 2"],
    [58.03, 7.43, "Vestnes båthus 3"],
    [58.09, 6.61, "Bauskje brettseilingssenter"],
    [58.10, 6.70, "Prestvannet kajakkanlegg"],
    [58.09, 6.81, "Naudodden båthus"],
    [58.08, 7.82, "Åros kajakkanlegg"],
    [58.08, 7.81, "Søgne Jollesenterets flytebrygge"],
    [58.08, 7.79, "Agderstrand flytebrygge"],
    [58.12, 7.05, "Agnefest  småbåthavn flytebrygger"],
    [58.46, 6.00, "Eie båtforening"],
    [58.46, 6.00, "Egersund motorbåtforening"],
    [58.46, 6.00, "Egersund sjøsportforening"],
    [58.46, 5.98, "Kattavige båtforening"],
    [58.98, 5.74, "Sølyst seileanlegg"],
    [58.99, 5.77, "Øyane båtforening"],
    [58.98, 5.74, "Gjestehavn sølyst"],
    [58.96, 5.75, "Gjestehavn hillevågsvatnet"],
    [58.97, 5.73, "Skagen flytebrygge"],
    [58.97, 5.68, "Store Stokkavatnet Roanlegg"],
    [58.00, 6.05, "Madlamoen"],
    [58.97, 5.66, "Stokkavannet rostadion - båthall"],
    [59.01, 5.77, "Langøy havn"],
    [59.42, 5.30, "Eivindsvatnet fiskebrygge"],
    [59.42, 5.30, "Flytebrygge Eivindsvatnet"],
    [59.42, 5.26, "Haugesund kajakkklubb - båtlager"],
    [58.45, 6.56, "Lundestranda vannsportsenter"],
    [58.66, 5.62, "Audamotlandstjørna kanopark"],
    [59.01, 6.43, "Flørli , flytebrygger/roanlegg"],
    [59.64, 6.34, "Treaskjæret båtanlegg"],
    [59.32, 5.48, "Tysvær kajakkanlegg - baner"],
    [59.32, 5.48, "Tysvær kajakkanlegg - båthus"],
    [59.32, 5.48, "Tysvær kajakkanlegg - flytebrygge"],
    [59.32, 5.48, "Tysvær kajakkanlegg - flytebrygge"],
    [59.33, 5.37, "Lindøy seilstasjon"],
    [59.29, 5.31, "Karmøy seilforening seilsportanlegg"],
    [59.47, 5.54, "Lie badeplass"],
    [60.34, 5.33, "Fana roklubb båtlager"],
    [60.26, 5.25, "Bergens seilf.-kviturspollen"],
    [60.31, 5.32, "Bergen roklubb båthall og garderober"],
    [60.26, 5.24, "Hjellestad seilforening"],
    [60.25, 5.27, "Milde båtlag"],
    [60.34, 5.33, "Langeholmen klubbhus"],
    [60.38, 5.26, "Laksevåg kajakk-klubb"],
    [60.31, 5.32, "Nordåsvannet"],
    [60.40, 10.69, "Rolaget Noreg, båthus"],
    [59.60, 5.32, "Buavåg, småbåthamn"],
    [59.73, 5.23, "Bømlo dykkersenter-kaianlegg"],
    [60.05, 5.52, "Peralio båthus"],
    [59.86, 5.75, "Kvinnherad Rosenter, 500 m"],
    [60.05, 6.55, "Hovden friluftsområde"],
    [60.46, 7.06, "Eidfjord Småbåthavn - flytebrygger"],
    [60.60, 7.50, "Ulvik vasskianlegg"],
    [60.63, 6.41, "Fylkesanlegg for roing, vangsv"],
    [60.63, 6.39, "Fylkesanlegg for roing, naust"],
    [60.39, 12.20, "Hardangerbadet -sjøsportsenter"],
    [60.20, 5.44, "Os roklubb - ulvenvatnet"],
    [60.20, 5.44, "Os roklubb - Rosportarena- båthus"],
    [60.20, 5.44, "Brygge og baneanlegg"],
    [60.17, 5.37, "Kvernavika småbåthavn"],
    [60.17, 5.37, "Kvernavika båthus"],
    [60.07, 5.27, "Haukanes båtlag"],
    [60.05, 5.19, "Kolbeinsvik fiske -og småbåtforening båthus"],
    [60.05, 5.19, "Kolbeinsvik fiske -og småbåtforening flytebrygge"],
    [60.09, 5.23, "Storebø båtlag flytebrygge"],
    [60.09, 5.23, "Storebø båtlag båthus"],
    [60.10, 5.22, "Austevoll seglforening båthus"],
    [60.10, 5.10, "Horgo friluftsområde- vannsportanlegg"],
    [60.39, 5.12, "Ran seglsportsenter - Båthamn/brygge"],
    [60.40, 5.12, "Ran seglsportsenter - Flytebrygge"],
    [60.39, 5.12, "Ran seglsportsenter - Båthus/naust"],
    [60.35, 4.99, "Sotra sportsdykkeranlegg"],
    [60.33, 4.90, "Løno,  Vannsportanlegg"],
    [60.31, 4.94, "Hissøyna, Vannsportanlegg"],
    [60.50, 5.16, "Askøy roklubbs anlegg"],
    [60.45, 5.11, "Askøy seilforening-  båthus "],
    [60.45, 5.11, "Askøy seilforening flytebrygge"],
    [60.45, 5.10, "Kleppestø båtlags naust på hanøy"],
    [60.56, 5.74, "Stanghelle padleanlegg, flytebryggje med tilkomst"],
    [61.07, 4.84, "Valen båthamn - lagerbygg vannsport"],
    [61.36, 6.65, "Båthus for kajakk - Bulandet symjehall"],
    [61.33, 5.34, "Haugland helsesportanlegg-flytebrygge"],
    [61.33, 5.34, "UWC - vannsportanlegg"],
    [61.46, 5.85, "Løken kajakkhavn"],
    [62.74, 7.22, "Molde seilsportsenter"],
    [62.74, 7.22, "Lubbenes - friluftsområde"],
    [62.73, 7.10, "Cap clara småbåthavn"],
    [62.47, 6.19, "Ålesund sportsdykkersenter"],
    [62.47, 6.20, "Ålesund seilforening, seilanlegg"],
    [62.47, 6.23, "Aalesunds roklubb, klubbhus"],
    [62.47, 6.23, "Aalesunds roklubb, flytebrygge"],
    [62.47, 6.23, "Aalesunds roklubb, båthus"],
    [62.47, 6.23, "Aalesunds Roklub, båthus 2"],
    [62.48, 6.19, "Ålesund kajakklubb"],
    [62.43, 6.34, "Bryggeanlegg Stafsethneset"],
    [63.13, 7.73, "Båtopptrekk ved Atlanten ungdomsskole"],
    [63.12, 7.73, "Kristiansund roklubb"],
    [63.12, 7.73, "Kristiansund seilforening"],
    [63.12, 7.73, "Kr.sund Seilf. flytebrygge"],
    [63.10, 7.73, "Innlandsmoloen småbåthavn"],
    [63.12, 7.73, "Vågen småbåthavn"],
    [63.05, 7.73, "Møstavågen småbåthavn"],
    [62.34, 11.78, "Flytebrygge Borgarøya "],
    [62.39, 6.56, "Ikornnes flytebrygge"],
    [62.50, 6.70, "Skodje dampskipskai"],
    [62.45, 6.18, "Storholmen flytebrygge"],
    [62.44, 6.19, "Lerheimkaia"],
    [62.58, 6.13, "Roald småbåthamn, båthus"],
    [62.58, 6.13, "Roald båtserviceanlegg seglanlegg"],
    [62.62, 7.08, "Myra friareal -  båthus"],
    [62.84, 8.13, "Raudsand småbåthavn - vannsportanlegg"],
    [62.68, 8.14, "Eresfjord flytebrygge"],
    [62.77, 8.06, "Eidsvågleira badeolass - baderampe"],
    [62.77, 8.06, "Eidsvågleira badeplass - Båtus for kano og kajakk"],
    [62.79, 6.47, "Steinshamn småbåthamn"],
    [62.83, 7.19, "Båtnaust - kråkneset småbåtham"],
    [62.91, 7.45, "Eide Båthavn - båthus"],
    [62.91, 7.45, "Eide Båthavn - brettsegling"],
    [63.07, 7.55, "Fårøya friluftsområde - flytebrygge"],
    [62.91, 8.19, "Vorpbukta småbåthavn"],
    [63.06, 8.01, "Vassbotn leirsted - vannsportanlegg"],
    [62.67, 8.53, "Sunndalsøra småbåthavn"],
    [62.88, 8.45, "Ørsvika"],
    [63.12, 14.29, "Flytebrygge"],
    [63.35, 8.16, "Nelvika småbåthavn"],
    [63.35, 8.15, "Nelvika flytebrygge"],
    [63.43, 10.37, "Skansen båthus roklubb"],
    [63.43, 10.37, "Skansen båthus - rehab garderobeanlegg"],
    [63.43, 10.37, "Skansen båthus seilforeningen"],
    [63.40, 10.55, "Jonsvatnet roanlegg - robane"],
    [63.40, 10.55, "Jonsvatnet roanlegg - båthus"],
    [63.43, 10.39, "Kanalen Brygge F - flytebrygge for seilbåter"],
    [63.43, 10.38, "Skansen havn - flytebrygge for seilbåter"],
    [63.43, 10.38, "Skansen havn - flytebrygge for seilbåter"],
    [63.41, 16.54, "Nydammen badeplass - Badeplattform m/flytebrygge og stupetårn"],
    [63.41, 16.54, "Nydammen badeplass - flytebrygge"],
    [70.44, 22.23, "Frøya kultur og kompetansesenter - sjøsportanlegg"],
    [63.73, 15.58, "Klubbhus Ørland Froskemannsklubb"],
    [64.04, 10.06, "Åfjord - Ms tangholm"],
    [63.13, 10.30, "Storvatnet flytebrygge"],
    [63.22, 10.14, "Grønneset fril.omr.-båtbrygge"],
    [63.11, 12.04, "Essand flytebrygge"],
    [64.47, 11.49, "Robrygga Vannsportanlegg"],
    [64.54, 11.27, "Lauvøyfjorden flytebrygge"],
    [64.40, 11.39, "Bangsund småbåthavn"],
    [64.46, 11.53, "Spillum flytebrygge, tilrettelagt for handikappede"],
    [64.40, 11.39, "Vannsport/ brygge, Bangsund"],
    [64.47, 11.48, "Vannsportbrygge, Namsos Båthavn"],
    [63.79, 11.48, "Verdalselva-Moparken Fiskebrygge"],
    [64.86, 11.23, "Rørvik Båt og fiskehavn"],
    [64.94, 11.96, "Årforsjøen flyte-/fiskebrygge"],
    [64.86, 11.28, "Sandvika flytebrygge"],
    [67.30, 14.39, "Kvalvika båthus"],
    [68.55, 17.54, "Prestjordneset, flytebrygge"],
    [68.41, 17.43, "Beisfjordbrua, vannskianlegg"],
    [68.41, 17.43, "Beisfjordbrua,flytebrygge"],
    [68.45, 17.43, "Vassvik flytebrygge"],
    [68.42, 17.36, "Ankenes, seilsportanlegg"],
    [68.43, 17.36, "Båtberget, flytebrygge"],
    [68.45, 17.43, "Narvik båthavn gjestehavn"],
    [65.41, 12.10, "Torget båt og badeplass"],
    [65.68, 12.13, "Igerøy småbåthavn"],
    [65.98, 12.28, "Herøy båthavn"],
    [65.92, 12.43, "Søvikanlegget småbåthavn"],
    [66.02, 12.61, "Sandnessjøen båthavn kajakkhus"],
    [66.03, 12.67, "Leinesodden båthus"],
    [65.84, 13.19, "Bordvedneset båtutsett"],
    [65.81, 14.19, "Tolkvatnet badeplass flytebrygge"],
    [66.17, 12.53, "Langfarskjæret flytebrygge"],
    [66.08, 12.58, "Bjørnsvågen flytebrygge"],
    [66.22, 12.58, "Nord-Dønna båthavn"],
    [66.08, 12.58, "Bjørn sjøsportanlegg"],
    [66.08, 12.58, "Bjørn båthavn"],
    [66.11, 12.58, "Solfjellsjøen flytebrygge"],
    [66.20, 13.02, "Nesna småbåthavn flytebrygge"],
    [66.31, 14.19, "Klokkerhagen Elvepark - Kanonaust m/bryg"],
    [66.57, 12.63, "Sørnesøy båthavn flytekai"],
    [67.25, 15.37, "Erikstad båthus"],
    [67.80, 15.30, "Lakså vannskianlegg"],
    [67.69, 15.04, "Langnesvika flytebrygge"],
    [67.96, 15.92, "Sagfjorden båthavn"],
    [68.02, 15.32, "Hestvika opplevelsesområde"],
    [67.51, 12.08, "Røst båthavn"],
    [68.04, 13.06, "Selfjord flytebrygge"],
    [68.08, 13.16, "Fredvang båthavn brygge"],
    [68.13, 13.82, "Slottdalen vannaktivitetsanlegg"],
    [68.13, 13.82, "Slottdalen vannsportanlegg"],
    [68.13, 13.86, "Lofoten seilersenter båthavn"],
    [68.11, 13.56, "Klokkervika brygge"],
    [68.25, 14.55, "Knutmarka flytebrygge"],
    [68.68, 14.73, "Haugsnes flytebrygge"],
    [68.88, 14.96, "Øksnesvågen"],
    [69.15, 16.08, "Kvalnes småbåthavn"],
    [68.97, 16.26, "Grøtavær flytebrygge"],
    [68.79, 18.00, "Sagvatnhytta naust"],
    [69.17, 18.11, "Djupvåg flytebrygge"],
    [69.16, 17.81, "Rubbestad flytebrygge"]
];
