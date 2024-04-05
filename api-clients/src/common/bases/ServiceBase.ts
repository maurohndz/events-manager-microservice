import { PrismaClient } from '@prisma/client';

class ServiceBase {
    protected prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
}

export default ServiceBase;
