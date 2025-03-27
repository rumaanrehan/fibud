import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { CreateMatchDto } from './dto/create-match.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async createMatch(dto: CreateMatchDto) {
    return this.prisma.match.create({
      data: {
        expertId: dto.expertId,
        clientId: dto.clientId,
      },
    });
  }

  async findAll(specialization?: string, rating?: number) {
    return this.prisma.match.findMany({
      where: {
        expert: {
          specialization: specialization ? specialization : undefined,
          rating: rating ? { gte: rating } : undefined,
        },
      },
      include: { expert: true, client: true },
    });
  }
}


