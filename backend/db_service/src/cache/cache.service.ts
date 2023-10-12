import { Injectable, Inject } from "@nestjs/common";
import { Cache } from "cache-manager";
import { CACHE_MANAGER } from "@nestjs/cache-manager";

@Injectable()
export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

    async get(key: string): Promise<any> {
        return JSON.parse(await this.cacheManager.get(key));
    }

    async set(key: string, value: any, ttl?: number): Promise<void> {
        return await this.cacheManager.set(key, value, ttl);
    }
}
