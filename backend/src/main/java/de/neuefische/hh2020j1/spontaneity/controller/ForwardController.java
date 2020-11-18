package de.neuefische.hh2020j1.spontaneity.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ForwardController {

    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String forwardToRoutUrl() {
        return "forward:/";
    }

}
