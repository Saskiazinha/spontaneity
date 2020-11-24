package de.neuefische.hh2020j1.spontaneity.utils;

public enum EnumStatus {
    GREEN("G"),
    YELLOW("Y"),
    BLUE("B");

    public final String abbreviation;

    EnumStatus(String abbreviation) {
        this.abbreviation = abbreviation;
    }
}
