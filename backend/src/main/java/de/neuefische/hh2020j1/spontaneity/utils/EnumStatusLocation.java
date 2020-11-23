package de.neuefische.hh2020j1.spontaneity.utils;

public enum EnumStatusLocation {
    GREEN("G"),
    YELLOW("Y"),
    BLUE("B");

    public final String abbreviation;

    EnumStatusLocation(String abbreviation) {
        this.abbreviation = abbreviation;
    }
}
