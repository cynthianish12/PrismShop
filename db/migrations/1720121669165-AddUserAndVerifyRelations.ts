import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserAndVerifyRelations1720121669165 implements MigrationInterface {
    name = 'AddUserAndVerifyRelations1720121669165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "verificationToken" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "verify" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "verify" ADD CONSTRAINT "FK_076d3a77ca71ace5e2d2d47cc9d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "verify" DROP CONSTRAINT "FK_076d3a77ca71ace5e2d2d47cc9d"`);
        await queryRunner.query(`ALTER TABLE "verify" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verificationToken"`);
    }

}
