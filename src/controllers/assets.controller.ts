import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetsService } from 'src/services/assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  @Post()
  async createAsset(
    @Body() body: { name: string; description: string; value: number },
  ) {
    return this.assetsService.createAsset(body);
  }

  @Get()
  async getAssets() {
    return this.assetsService.getAssets();
  }
}
