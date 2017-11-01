#!/usr/bin/perl

use strict;

while (<>) {
    if (/^([^\;]+)\;([^\;]+)\;([^\;]+)\;([^\;]+)$/) {
        my $name = $1;
        my $x = $2;
        my $y = $3;
        my $zone = $4;
        chomp $zone;
        if ($zone eq "33") {
            my $latlon = `echo "$y $x" | cs2cs +init=epsg:32633 +to +init=epsg:4326 -f "%.2f"`;
            if ($latlon =~ /\s*([\d\.]+)\s+([\d\.]+)\s+([\d\.]+)\s*/) {
                print "[$2, $1, \"$name\"],\n";
            }
        }
    }
}
