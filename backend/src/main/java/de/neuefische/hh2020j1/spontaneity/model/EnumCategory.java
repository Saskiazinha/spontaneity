package de.neuefische.hh2020j1.spontaneity.model;

public enum EnumCategory {
    Drinks("DR"),
    Meal("ME"),
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
