import { MigrationInterface, QueryRunner } from "typeorm";

export class AddIsVerifiedColumnToUsers1720119329256 implements MigrationInterface {
    name = 'AddIsVerifiedColumnToUsers1720119329256'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "isVerified" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isVerified"`);
    }

}
