package de.neuefische.hh2020j1.spontaneity.utils;

public enum EnumCategory {
    Drinks("DR"),
    Dinner("DI"),
    Events("EV"),
    Exercise("EX"),
    Outdoor("OU"),
    Party("PA"),
    Hangout("HA");

    public final String abbreviation;

    EnumCategory(String abbreviation) {
        this.abbreviation = abbreviation;
    }


}
