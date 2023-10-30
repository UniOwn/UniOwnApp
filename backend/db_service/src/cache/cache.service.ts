import { Cache } from "cache-manager";
import { Injectable, Inject } from "@nestjs/common";
import { CACHE_MANAGER } from "@nestjs/cache-manager";

@Injectable()
export class CacheService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

    async get<T>(key: string): Promise<T> {
        return await this.cacheManager.get(key);
    }

    async set<T>(key: string, value: T, ttl?: number): Promise<void> {
        return await this.cacheManager.set(key, value, ttl);
    }
}
