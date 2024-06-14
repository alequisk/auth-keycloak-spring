package dev.alequisk.resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/echo")
public class ExampleController {

    @GetMapping("/public")
    public String publicMethod() {
        return "Public EndPoint";
    }

    @GetMapping("/protected")
    public String protectedMethod() {
        return "Protected EndPoint";
    }
}
