import { Test, TestingModule } from "@nestjs/testing";

import { DaosController } from "./daos.controller";

describe("DaosController", () => {
    let controller: DaosController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [DaosController]
        }).compile();

        controller = module.get<DaosController>(DaosController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
