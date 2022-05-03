import { PrismaClient } from '@prisma/client'

export default class Settings {
  private static readonly Prisma: PrismaClient = new PrismaClient()

  // DefaultRoles
  // Donates В ДРУГОЙ КОНТРОЛЛЕР
  // Levels В ДРУГОЙ КОНТРОЛЛЕР
  // LevelsSettings
  // Messages
  // PrivateVoices
  public static createDefaultRoles(guildID: string, rolesIDs: string[]) {
    return this.Prisma.defaultRoles.create({
      data: {
        guildID,
        rolesIDs
      }
    })
  }

  public static async updateDefaultRoles(guildID: string, rolesIDs: string[]): Promise<boolean> {
    let defaultRoles = await this.Prisma.defaultRoles.update({
      where: {
        guildID,
      },
      data: {
        guildID,
        rolesIDs,
      }
    }).catch(_ => this.createDefaultRoles(guildID, rolesIDs))

    return !!defaultRoles
  }

  public static getDefaultRoles(guildID: string) {
    return this.Prisma.defaultRoles.findFirst({
      where: {
        guildID
      }
    })
  }

  public static async updateLevelsSettings() {
    // TODO
  }
}
