import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AssetsService } from 'src/services/assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  @Post()
  async createAsset(
    @Body()
    body: {
      name: string;
      description: string;
      value: number;
      organizationId: number;
    },
  ) {
    return this.assetsService.createAsset(body);
  }

  @Get()
  async getAssets() {
    return this.assetsService.getAssets();
  }

  @Delete(':id')
  async deleteAsset(@Param('id') id: string) {
    return this.assetsService.deleteAsset(+id);
  }
}
