from django.conf import settings
from django.db import models
class Sgfr(models.Model):
    'Generated Model'
    ngmg = models.BigIntegerField()
    bvvnse = models.BigIntegerField()
    swer = models.BigIntegerField()
    rel_sdyu_1_1 = models.OneToOneField("home.Sdyu",blank=True,null=True,on_delete=models.CASCADE,related_name="sgfr_rel_sdyu_1_1",)
class Sdyu(models.Model):
    'Generated Model'
    cdbr = models.BigIntegerField()
