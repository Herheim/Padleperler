# Les inn vannsport-anlegg
f = open("idrettsanlegg-vannsportanlegg","r")
header = open("idrettsanlegg").readline().split(";")
anleggstyper = {}
for line in f.readlines():
    anlegg=line.split(";")
    anleggstype = anlegg[header.index("anleggstype")]
    if anleggstyper.has_key(anleggstype):
        anleggstyper[anleggstype] += 1
    else:
        anleggstyper[anleggstype] = 1

print "Unike anleggstyper:"
for key in anleggstyper.keys():
  print key
