import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsVerificationTokenToUser1720121145506 implements MigrationInterface {
    name = 'AddIsVerificationTokenToUser1720121145506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "verificationToken" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "verificationToken"`);
    }

}
