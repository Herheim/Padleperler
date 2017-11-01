#!/usr/bin/perl

use strict;

while (<>) {
    if (/\"geoPoint\"\:\[([\d\.]+)\,([\d\.]+)\].*\"title\"\:\[\"([^\"]+)\"\]/) {
        print "[$2, $1, \"$3\"],\n";
    }
}
