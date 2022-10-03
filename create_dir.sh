#!/bin/bash
route=$1;
mkdir $route;

index="${route}/index.tsx";
styles="${route}/styles.tsx";

touch $index $styles;