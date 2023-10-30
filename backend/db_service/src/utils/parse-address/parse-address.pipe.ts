import { PipeTransform, Injectable, NotAcceptableException } from "@nestjs/common";

@Injectable()
class ParseAddressPipe implements PipeTransform<string, string> {
    transform(value: string): string {
        const validAddress = /^(0x)?[0-9A-Fa-f]+$/.test(value);

        if (!validAddress) {
            throw new NotAcceptableException("Invalid address format");
        }

        return value;
    }
}

export default ParseAddressPipe;
