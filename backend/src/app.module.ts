import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoolsModule } from './pools/pools.module';

@Module({
  imports: [PoolsModule, MongooseModule.forRoot(`mongodb+srv://grigorenkoad:YxiboKLFu5YS4huD@cluster0.parij19.mongodb.net/?retryWrites=true&w=majority`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
