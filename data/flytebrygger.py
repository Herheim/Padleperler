# Les inn vannsport-anlegg
f = open("idrettsanlegg-vannsportanlegg","r")
header = open("idrettsanlegg").readline().split(";")
for line in f.readlines():
    anlegg=line.split(";")
    my_attrs = ["utm_nord","utm_ost","utm_sone","anleggsnavn","anleggstype"]
    if (anlegg[header.index("anleggstype")] == "Flytebrygge"):
        # anleggsnavn;utm_nord,utm_ost,utm_sone
        nord = anlegg[header.index("utm_nord")]
        ost = anlegg[header.index("utm_ost")]
        sone = anlegg[header.index("utm_sone")]
        navn = anlegg[header.index("anleggsnavn")]
        print "%s;%s;%s;%s" % (navn,nord,ost,sone)
